import Router from 'koa-router';
import { Attribute } from '../../controllers';

const router = Router({ prefix: '/attribute' });

router
  .post('/', Attribute.Specification.create);

export default router;
