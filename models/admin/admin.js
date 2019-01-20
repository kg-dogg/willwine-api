import { Sequelize, db } from '../../lib/sequelize';

const Admin = db.define('admin', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
    allowNull: false
  },
  username: { // 用户名
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  password_salt: Sequelize.STRING,
  avatar: Sequelize.STRING,
  is_active: { //是否激活
    type: Sequelize.TINYINT(1),
    defaultValue: 1
  },
  is_delete: { // 用户是否删除
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
}, {
  paranoid: true,
  comment: '管理员信息表'
});

export default Admin;