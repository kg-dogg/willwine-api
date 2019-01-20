import { Sequelize, db } from '../../../lib/sequelize';

const GoodsAttributeCategory = db.define('goods_attribute_category', {
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
  comment: '属性分类表'
});

export default GoodsAttributeCategory;