import Router from 'koa-router';
import { Supplier } from '../../controllers';

const router = Router({ prefix: '/supplier' });

router
.post('/',  Supplier.create)
.get('/', Supplier.get)
.put('/', Supplier.put)
.delete('/', Supplier.delete)

export default router;
