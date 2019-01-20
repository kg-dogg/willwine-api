import { Sequelize, db } from '../../../lib/sequelize';

const GoodsAttribute = db.define('goods_attribute', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  attribute_category_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  name: Sequelize.STRING(60),
  input_type: {
    type: Sequelize.TINYINT(1),
    defaultValue: 0,
    comment: '0: text input | 1: single select | 2: mutiple select',
  },
  sort_order: {
    type: Sequelize.TINYINT(0),
    defaultValue: 0,
  },
}, {
  underscored: true,
  paranoid: true,
  comment: '属性名'
});

export default GoodsAttribute;