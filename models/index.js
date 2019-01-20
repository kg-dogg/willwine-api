import {
  Admin,
  Region,
  Specification,
  Supplier,
} from './admin';
import {
  GoodsBrand,
  GoodsCategory,
  Goods,
  GoodsGallery,
  GoodsAttributeCategory, GoodsAttribute, GoodsAttributeValue,
  GoodsSKUCategory, GoodsSKU, GoodsSKUValue,
  ProductCategory, Product,
} from './common/liquor';
import {
  User,
  Cart,
} from './weApp';

Goods.belongsTo(Supplier, { foreignKey: 'supplier_id', targetKey: 'id' });

export {
  Admin,
  Region,
  Specification,
  Supplier,

  GoodsBrand,
  GoodsCategory,
  Goods,
  GoodsGallery,
  GoodsAttributeCategory, GoodsAttribute, GoodsAttributeValue,
  GoodsSKUCategory, GoodsSKU, GoodsSKUValue,
  ProductCategory, Product,

  User,
  Cart,
};
