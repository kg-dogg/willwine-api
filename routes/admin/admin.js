import Router from 'koa-router';
import { Admin } from '../../controllers';

const router = Router({ prefix: '/auth' });

router
  .post('/', Admin.createAdmin)
  .post('/login', Admin.login)
  .post('/logout', Admin.logout)
  .get('/userInfo', Admin.userInfo);

export default router;
