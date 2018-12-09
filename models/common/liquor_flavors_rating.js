import { Sequelize, db } from '../../lib/sequelize';

const LiquorFlavorsRating = db.define('liquor_flavors_rating', {
  liquor_id: {
    type: Sequelize.INTEGER
  },
  flavors_id: {
    type: Sequelize.INTEGER
  },
  rating: {
    type: Sequelize.FLOAT
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  timestamps: false,
  comment: '酒口味评级信息表'
});

export default LiquorFlavorsRating;