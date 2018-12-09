import { Sequelize, db } from '../../lib/sequelize';

const LiquorFlavors = db.define('liquor_flavors', {
  name: {
    type: Sequelize.STRING
  },
  en_name: {
    type: Sequelize.STRING
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  timestamps: false,
  comment: '酒口味信息表'
});

export default LiquorFlavors;