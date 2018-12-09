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
  password: { // 密码
    type: Sequelize.STRING,
  },
  password_salt: { // 密码
    type: Sequelize.STRING,
  },
  avatar: { // 头像URL
    type: Sequelize.STRING,
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
  is_active: { //是否激活
    type: Sequelize.TINYINT(1),
    defaultValue: 1
  },
  is_delete: { // 用户是否删除
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  timestamp_at: { // 更新时的时间戳
    type: Sequelize.BIGINT
  }
}, {
  timestamps: false,
  comment: '管理员信息表'
});

export default Admin;