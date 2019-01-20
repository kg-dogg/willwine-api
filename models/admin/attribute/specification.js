import { Sequelize, db } from '../../../lib/sequelize';

const Specification = db.define('specification', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(60),
  sort_order: {
    type: Sequelize.TINYINT(3),
    defaultValue: 50,
  },
}, {
  paranoid: true,
  comment: '规格表'
});

export default Specification;
