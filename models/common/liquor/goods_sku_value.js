
import { Sequelize, db } from '../../../lib/sequelize';

const GoodsSKUValue = db.define('goods_sku_value', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sku_key_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  value: Sequelize.STRING(255),
  sort_order: {
    type: Sequelize.TINYINT(0),
    defaultValue: 0,
  },
}, {
  underscored: true,
  paranoid: true,
  comment: 'sku value'
});

export default GoodsSKUValue;