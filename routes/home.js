import Router from 'koa-router';

const router = Router();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Will wine!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

export default router;
