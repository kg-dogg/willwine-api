import { Sequelize, db } from '../../../lib/sequelize';

const GoodsSKUCategory = db.define('goods_sku_category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(60),
  enabled: {
    type: Sequelize.TINYINT(1),
    defaultValue: 1,
  },
}, {
  underscored: true,
  paranoid: true,
  comment: 'sku分类表'
});

export default GoodsSKUCategory;