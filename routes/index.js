import Router from 'koa-router';
import user from './user';
import admin from './admin';

const router = Router({ prefix: '/api' })
  .use(user.routes())
  .use(admin.routes());

export default router;
