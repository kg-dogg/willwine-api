import { Sequelize, db } from '../../../lib/sequelize';

const GoodsGallery = db.define('goods_gallery', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  goods_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0,
  },
  img_url: Sequelize.STRING(255),
  img_desc: Sequelize.STRING(255),
  sort_order: {
    type: Sequelize.INTEGER(11),
    defaultValue: 5,
  },
}, {
  underscored: true,
  paranoid: true,
  comment: '商品图片表'
});

export default GoodsGallery;