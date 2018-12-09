import { Sequelize, db } from '../../lib/sequelize';

const LiquorFoodPairing = db.define('liquor_food_pairing', {
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
  comment: '食物搭配信息表'
});

export default LiquorFoodPairing;