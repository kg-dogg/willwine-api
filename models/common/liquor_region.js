import { Sequelize, db } from '../../lib/sequelize';

const LiquorRegion = db.define('liquor_region', {
  state: {
    type: Sequelize.STRING
  },
  region: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },
  flag_img_url: {
    type: Sequelize.STRING
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  timestamps: false,
  comment: '产地信息表'
});

export default LiquorRegion;