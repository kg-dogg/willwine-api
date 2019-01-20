import { Sequelize, db } from '../../../lib/sequelize';

const GoodsSKU = db.define('goods_sku', {
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
  goods_specs: {
    type: Sequelize.STRING,
    comment: '{"内存": "2G", "颜色": "红色", "尺寸": "20cm"}',
  },
  goods_sn: Sequelize.STRING(60),
  goods_number: {
    type: Sequelize.MEDIUMINT(8),
    defaultValue: 0,
  },
  retail_price: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  pic_url: Sequelize.STRING(255),
}, {
  underscored: true,
  paranoid: true,
  comment: '商品对应规格表值表'
});

export default GoodsSKU;
