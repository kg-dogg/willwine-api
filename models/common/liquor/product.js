import { Sequelize, db } from '../../../lib/sequelize';

// 青酒、白酒、红酒、啤酒
const Product = db.define('product', {
  id: {
    type: Sequelize.MEDIUMINT(8),
    primaryKey: true,
    autoIncrement: true
  },
  product_category_id: Sequelize.INTEGER,
  name: Sequelize.STRING(50),
  subtitle: Sequelize.STRING(60),
  main_image: Sequelize.STRING(255),
  sub_images: Sequelize.STRING,
  detail: Sequelize.TEXT,
  enabled: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  sort_order: {
    type: Sequelize.MEDIUMINT(8),
    defaultValue: 0,
  },
}, {
  underscored: true,
  paranoid: true,
  comment: '产品表'
});

export default Product;
