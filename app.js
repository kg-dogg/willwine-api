import path from 'path';
import Koa from 'koa';
import views from 'koa-views';
import json from 'koa-json';
import koaBody from 'koa-body';
import onerror from 'koa-onerror';
// import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import jwtKoa from 'koa-jwt';
import routes from './routes';
import { secret, properties } from './config';

const app = new Koa();

// error handler
onerror(app);

// middlewares
app
  .use(jwtKoa({ secret }).unless({
    path: [
      /^\/api\/auth\/login/,
      /^\/api\/auth/,
      /^((?!\/api).)*$/,
    ], //数组中的路径不需要通过jwt验证
  }))
  // .use(bodyparser({
  //   enableTypes:['json', 'form', 'text']
  // }))
  .use(koaBody({
    multipart: true,
    strict: false,
    // encoding: 'gzip',
    formidable: {
      uploadDir: path.join(__dirname, properties.formidable.uploadDir, 'tmp'),
      keepExtensions: true,    // 保持文件的后缀
      maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
    },
  }))
  .use(json())
  .use(logger())
  .use(require('koa-static')(__dirname + '/assets'))
  .use(views(__dirname + '/views', {
  extension: 'pug'
}))
  .use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })
  .use(routes.routes(), routes.allowedMethods()); // routes

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
// export default app;
