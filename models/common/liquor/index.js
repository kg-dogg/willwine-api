import { db } from '../../../lib/sequelize';

import Goods from './goods';
import GoodsBrand from './goods_brand';
import GoodsCategory from './goods_category';
import GoodsGallery from './goods_gallery';
import GoodsAttributeCategory from './goods_attribute_category';
import GoodsAttribute from './goods_attribute';
import GoodsAttributeValue from './goods_attribute_value';
import GoodsSKUCategory from './goods_sku_category';
import GoodsSKUKey from './goods_sku_key';
import GoodsSKUValue from './goods_sku_value';
import GoodsSKU from './goods_sku';
import ProductCategory from './product_category';
import Product from './product';

Goods.belongsTo(GoodsBrand, { foreignKey: 'brand_id', targetKey: 'id' });
Goods.belongsTo(GoodsCategory, { foreignKey: 'category_id', targetKey: 'id' });
GoodsGallery.belongsTo(Goods, { foreignKey: 'goods_id', targetKey: 'id' });
GoodsSKUKey.belongsTo(GoodsSKUCategory, { foreignKey: 'sku_category_id', targetKey: 'id' });
GoodsSKUValue.belongsTo(GoodsSKUKey, { foreignKey: 'sku_key_id', targetKey: 'id' });
GoodsSKU.belongsTo(Goods, { foreignKey: 'goods_id', targetKey: 'id' });
Product.belongsTo(ProductCategory, { foreignKey: 'product_category_id', targetKey: 'id' });

GoodsAttribute.belongsTo(GoodsAttributeCategory, { foreignKey: 'attribute_category_id', targetKey: 'id' });
GoodsAttribute.hasMany(GoodsAttributeValue, {
  foreignKey: 'attribute_id',
  constraints: false // 不设置外键约束
});
GoodsAttributeValue.belongsTo(GoodsAttribute, { foreignKey: 'attribute_id', targetKey: 'id' });

// 重新创建所有的表结构
// db.sync({ force: true });

export {
  Goods,
  GoodsBrand,
  GoodsCategory,
  GoodsGallery,
  GoodsAttributeCategory,
  GoodsAttribute,
  GoodsAttributeValue,
  GoodsSKUCategory,
  GoodsSKUKey,
  GoodsSKUValue,
  GoodsSKU,
  ProductCategory,
  Product,
};
