import { Sequelize, db } from '../../lib/sequelize';

const LiquorFoodPairingRating = db.define('liquor_food_pairing_rating', {
  liquor_id: {
    type: Sequelize.INTEGER
  },
  food_id: {
    type: Sequelize.INTEGER
  },
  rating: {
    type: Sequelize.FLOAT
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  timestamps: false,
  comment: '食物搭配评级信息表'
});

export default LiquorFoodPairingRating;