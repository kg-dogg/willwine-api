import { Sequelize, db } from '../../../lib/sequelize';

const GoodsCategory = db.define('goods_category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(90),
  keywords: Sequelize.STRING(255),
  front_desc: Sequelize.STRING(255),
  parent_id: {
    type: Sequelize.INTEGER(11),
    defaultValue: 0,
  },
  sort_order: {
    type: Sequelize.TINYINT(2),
    defaultValue: 50,
  },
  show_index: {
    type: Sequelize.TINYINT(1),
    defaultValue: 0,
  },
  is_show: {
    type: Sequelize.TINYINT(1),
    defaultValue: 1,
  },
  banner_url: Sequelize.STRING(255),
  icon_url: Sequelize.STRING(255),
  img_url: Sequelize.STRING(255),
  wap_banner_url: Sequelize.STRING(255),
  level: Sequelize.STRING(255),
  type: {
    type: Sequelize.INTEGER(11),
    defaultValue: 0,
  },
  front_name: Sequelize.STRING(255),
}, {
  underscored: true,
  paranoid: true,
  comment: '商品分类表'
});

export default GoodsCategory;