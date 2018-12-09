import Router from 'koa-router';
import { Admin } from '../../controllers';

const router = Router({ prefix: '/auth' });

router.post('/', Admin.createAdmin);
router.post('/login', Admin.login);

export default router;
