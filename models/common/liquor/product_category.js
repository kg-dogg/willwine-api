import { Sequelize, db } from '../../../lib/sequelize';

// 一级：实体、虚拟
// 二级：酒、工具、其它
// 二级：会员，折扣券，优惠券
const ProductCategory = db.define('product_category', {
  id: {
    type: Sequelize.MEDIUMINT(8),
    primaryKey: true,
    autoIncrement: true
  },
  parent_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  name: Sequelize.STRING(50),
  enabled: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  sort_order: {
    type: Sequelize.MEDIUMINT(8),
    defaultValue: 0,
  },
  root_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    comment: '第一级的父级ID，方便取数据时按组排序',
  },
}, {
  underscored: true,
  paranoid: true,
  comment: '产品类别表'
});

export default ProductCategory;
