import { Sequelize, db } from '../../lib/sequelize';

const Cart = db.define('cart', {
  user_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
  liquor_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  liquor_name: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  retail_price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  number: {
    type: Sequelize.SMALLINT(5),
    allowNull: false
  },
  list_pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  timestamps: false,
  comment: '购物车'
});

export default Cart;