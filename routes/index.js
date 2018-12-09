import Router from 'koa-router';
import user from './user';
import home from './home';
import admin from './admin';

const router = Router()
  .use(home.routes())
  .use(user.routes())
  .use(admin.routes());

export default router;
