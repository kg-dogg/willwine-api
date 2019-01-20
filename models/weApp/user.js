import { Sequelize, db } from '../../lib/sequelize';

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING(60),
    defaultValue: '',
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(60),
    defaultValue: '',
    allowNull: false
  },
  gender: {
    type: Sequelize.TINYINT(1),
    defaultValue: 0,
    allowNull: false
  },
  birthday: {
    type: Sequelize.INTEGER(11),
    defaultValue: 0,
    allowNull: false
  },
  number: {
    type: Sequelize.SMALLINT(5),
    allowNull: false
  },
  last_login_ip: {
    type: Sequelize.STRING(15),
    defaultValue: '',
    allowNull: false
  },
  nickname: {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  mobile: {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  avatar: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: false
  },
  weixin_openid: {
    type: Sequelize.STRING(50),
    defaultValue: '',
    allowNull: false
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  timestamps: false,
  comment: '购物车'
});

export default User;