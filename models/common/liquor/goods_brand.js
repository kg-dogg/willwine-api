import { Sequelize, db } from '../../../lib/sequelize';

const GoodsBrand = db.define('goods_brand', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(255),
  list_pic_url: Sequelize.STRING(255),
  simple_desc: Sequelize.STRING(255),
  pic_url: Sequelize.STRING(255),
  sort_order: {
    type: Sequelize.TINYINT(3),
    defaultValue: 50,
  },
  is_show: {
    type: Sequelize.TINYINT(1),
    defaultValue: 1,
  },
  floor_price: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  app_list_pic_url: Sequelize.STRING(255),
  is_new: {
    type: Sequelize.TINYINT(1),
    defaultValue: 0,
  },
  new_pic_url: Sequelize.STRING(255),
  new_sort_order: {
    type: Sequelize.TINYINT(2),
    defaultValue: 10,
  },
}, {
  underscored: true,
  paranoid: true,
  comment: '商品品牌表'
});

export default GoodsBrand;