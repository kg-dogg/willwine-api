import { Sequelize, db } from '../../../lib/sequelize';

const GoodsAttributeValue = db.define('goods_attribute_value', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  value: Sequelize.STRING(255),
  sort_order: {
    type: Sequelize.TINYINT(0),
    defaultValue: 0,
  },
}, {
  underscored: true,
  paranoid: true,
  comment: '属性值'
});

export default GoodsAttributeValue;