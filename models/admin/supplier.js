import { Sequelize, db } from '../../lib/sequelize';

const Supplier = db.define('supplier', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(225),
  enabled: {
    type: Sequelize.TINYINT(1),
    defaultValue: 1,
  },
  goods_count: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  sold_count: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
}, {
  paranoid: true,
  comment: '商户表'
});

export default Supplier;
