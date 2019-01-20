import Router from 'koa-router';
import admin from './admin';
import liquor from './liquor';
import attribute from './attribute';
import files from './files';
import supplier from './supplier';

const router = Router()
  .use(admin.routes())
  .use(liquor.routes())
  .use(files.routes())
  .use(attribute.routes())
  .use(supplier.routes());

export default router;
