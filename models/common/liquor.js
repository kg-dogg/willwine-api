import { Sequelize, db } from '../../lib/sequelize';

const Liquor = db.define('liquor', {
  name: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  brand_id: {
    type: Sequelize.INTEGER,
  },
  number: {
    type: Sequelize.SMALLINT(5),
  },
  brief: {
    type: Sequelize.STRING(255),
  },
  is_on_sale: {
    type: Sequelize.TINYINT(1),
    defaultValue: 1
  },
  is_delete: {
    type: Sequelize.TINYINT(1),
    defaultValue: 0
  },
  primary_pic_url: {
    type: Sequelize.STRING(255),
    comment: '主图'
  },
  list_pic_url: {
    type: Sequelize.STRING(255),
    comment: '列表图'
  },
  is_hot: {
    type: Sequelize.TINYINT(1),
    defaultValue: 0
  },
  retail_price: {
    type: Sequelize.DECIMAL,
    defaultValue: 0,
    allowNull: false
  },
  keywords: {
    type: Sequelize.STRING(255),
  },
  member_price: {
    type: Sequelize.DECIMAL,
    defaultValue: 0,
    allowNull: false
  },
  sell_volume: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  vintage: {
    type: Sequelize.STRING(10)
  },
  alcohol_by_volume: {
    type: Sequelize.DECIMAL,
  },
  specification: {
    type: Sequelize.STRING
  },
  unit: {
    type: Sequelize.STRING
  },
  desc: {
    type: Sequelize.STRING
  },
  comment: {
    type: Sequelize.STRING
  },
  region_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  timestamps: false,
  comment: '产品信息表'
});

export default Liquor;