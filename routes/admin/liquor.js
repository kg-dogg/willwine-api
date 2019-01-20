import Router from 'koa-router';
import { Liquor } from '../../controllers';

const router = Router({ prefix: '/liquor' });

router
  .post('/goods/attribute/category', Liquor.GoodsAttributeCategory.create)
  .get('/goods/attribute/category', Liquor.GoodsAttributeCategory.get)
  .put('/goods/attribute/category', Liquor.GoodsAttributeCategory.put)
  .delete('/goods/attribute/category', Liquor.GoodsAttributeCategory.delete)

  .get('/goods/attribute/category/:id', Liquor.GoodsAttributeCategory.getById)
  
  .post('/goods/attribute', Liquor.GoodsAttribute.create)
  .get('/goods/attribute/list/:id', Liquor.GoodsAttribute.get)
  .get('/goods/attribute/name/:id', Liquor.GoodsAttribute.getOne)
  .put('/goods/attribute', Liquor.GoodsAttribute.put)
  .delete('/goods/attribute', Liquor.GoodsAttribute.delete)

  .post('/goods/attribute/value', Liquor.GoodsAttributeValue.create)
  .get('/goods/attribute/value/:id', Liquor.GoodsAttributeValue.get)
  .get('/goods/attribute/aggreation/:id', Liquor.GoodsAttributeValue.getAggregationByCategoryId)
  .put('/goods/attribute/value', Liquor.GoodsAttributeValue.put)
  .delete('/goods/attribute/value', Liquor.GoodsAttributeValue.delete)

  .post('/goods/brand', Liquor.GoodsBrand.create)
  .get('/goods/brand', Liquor.GoodsBrand.get)
  .post('/goods/category', Liquor.GoodsCategory.create)
  .get('/goods/category', Liquor.GoodsCategory.get)
  .post('/goods/sku/category', Liquor.GoodsSKUCategory.create)
  .get('/goods/sku/category', Liquor.GoodsSKUCategory.get)
  .post('/goods/sku/key', Liquor.GoodsSKUKey.create)
  .get('/goods/sku/key', Liquor.GoodsSKUKey.get)
  .post('/goods/sku/value', Liquor.GoodsSKUValue.create)
  .get('/goods/sku/value', Liquor.GoodsSKUValue.get)
  .post('/goods/sku', Liquor.GoodsSKU.create)
  .get('/goods/sku', Liquor.GoodsSKU.get)
  .post('/goods', Liquor.Goods.create)
  .get('/goods', Liquor.Goods.get)
  .post('/product/category', Liquor.ProductCategory.create)
  .get('/product/category', Liquor.ProductCategory.get)
  .post('/product', Liquor.Product.create)
  .get('/product', Liquor.Product.get);

export default router;
