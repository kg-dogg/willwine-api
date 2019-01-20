import Router from 'koa-router';
import { Files } from '../../controllers';

const router = Router({ prefix: '/files' });

router
  .post('/', Files.upload);

export default router;
