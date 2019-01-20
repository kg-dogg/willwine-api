import { Sequelize, db } from '../../../lib/sequelize';

const Goods = db.define('goods', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  category_id: Sequelize.INTEGER,
  product_id: Sequelize.INTEGER,
  supplier_id: Sequelize.INTEGER,
  goods_sn: Sequelize.STRING(60),
  name: Sequelize.STRING(120),
  brand_id: Sequelize.INTEGER,
  goods_number: {
    type: Sequelize.MEDIUMINT(8),
    defaultValue: 0,
  },
  keywords: Sequelize.STRING(255),
  goods_brief: Sequelize.STRING(255),
  goods_desc: Sequelize.TEXT,
  sale_status: {
    type: Sequelize.TINYINT(1),
    defaultValue: 1,
    comment: '-1：缺货|0：已下架|1: 待上架|2：售卖中',
  },
  sort_order: {
    type: Sequelize.TINYINT(4),
    defaultValue: 100,
  },
  is_delete: {
    type: Sequelize.TINYINT(1),
    defaultValue: 0,
  },
  attribute_list: {
    type: Sequelize.STRING,
    comment: '{"内存": ["2G", "4G"], "颜色": ["红色"], "尺寸": ["20cm"]}',
  },
  counter_price: {
    type: Sequelize.DECIMAL(10, 2),
    comment: '专柜价格',
  },
  extra_price: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.00,
    comment: '附加价格',
  },
  is_new: {
    type: Sequelize.TINYINT(1),
    defaultValue: 0,
  },
  goods_unit: {
    type: Sequelize.STRING(45),
    comment: '商品单位',
  },
  primary_pic_url: {
    type: Sequelize.STRING(255),
    comment: '商品主图',
  },
  list_pic_url: {
    type: Sequelize.STRING(255),
    comment: '商品列表图',
  },
  retail_price: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.00,
    comment: '零售价格',
  },
  sell_volume: {
    type: Sequelize.INTEGER(11),
    defaultValue: 0,
    comment: '销售量',
  },
  primary_product_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    comment: '主sku　product_id',
  },
  unit_price: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.00,
    comment: '单位价格，单价',
  },
  promotion_desc: {
    type: Sequelize.STRING(255),
    comment: '促销信息',
  },
  promotion_tag: Sequelize.STRING(60),
  is_limited: {
    type: Sequelize.TINYINT(1),
    defaultValue: 0,
  },
  is_hot: {
    type: Sequelize.TINYINT(1),
    defaultValue: 0,
  },
}, {
  underscored: true,
  paranoid: true,
  comment: '商品表'
});

export default Goods;