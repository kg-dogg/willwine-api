import Router from 'koa-router';
import admin from './admin';

const router = Router()
  .use(admin.routes());

export default router;
