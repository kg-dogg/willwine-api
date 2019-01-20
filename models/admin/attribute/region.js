import { Sequelize, db } from '../../../lib/sequelize';

const Region = db.define('region', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  parent_id: {
    type: Sequelize.SMALLINT(5),
    allowNull: false,
    defaultValue: 0,
  },
  name: Sequelize.STRING(120),
  type: {
    type: Sequelize.TINYINT(1),
    defaultValue: 2,
  },
  agency_id: {
    type: Sequelize.SMALLINT(5),
    defaultValue: 0,
  },
}, {
  paranoid: true,
  comment: '产地表'
});

export default Region;
