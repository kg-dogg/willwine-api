import { Sequelize, db } from '../../../lib/sequelize';

const GoodsSKUKey = db.define('goods_sku_key', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sku_category_id: Sequelize.INTEGER,
  name: Sequelize.STRING(60),
  sort_order: {
    type: Sequelize.TINYINT(0),
    defaultValue: 0,
  },
}, {
  underscored: true,
  paranoid: true,
  comment: 'sku key'
});

export default GoodsSKUKey;