import Sequelize from 'sequelize';
import { getConfig } from '../config';

const config = getConfig().env;

const db = new Sequelize(config.DB_DATABASE, config.DB_USER, config.DB_PASS, {
  host: config.DB_HOST,
  operatorsAliases: false,
  dialect: config.DB_DIALECT,
  define: {
    // 字段以下划线（_）来分割（默认是驼峰命名风格）
    underscored: true,
    freezeTableName: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    timestamps: true
  },
  pool: {
    // max: 50, // 默认设置
    max: 1, // 测试用1
    min: 0,
    idle: 10000
  }
});

db.authenticate()
  .then(() => {
    console.log('连接数据库成功!')
  })
  .catch(err => {
    console.error('不能连接数据库:', err)
  });

export { Sequelize, db };