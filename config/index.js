/**
 * Created by hnzb on 16/6/14.
 */


const env = process.env.NODE_ENV || 'development';

const conPath = `${process.cwd()}/config/`;

const propertiesPath = `${conPath}properties.json`;
const log4jsPath = `${conPath}log4js.json`;

const properties =  require(propertiesPath)[env];
const log4js =  require(log4jsPath);

const secret = 'Nathan';

const getConfig = () => {
  try {
    const result = require('dotenv').config();

    if (result.error) {
      console.error('缺少 .env 环境配置文件，请添加！详情请查看 dotenv 文档：https://github.com/motdotla/dotenv')
      console.error(result.error)
      return {
        env: require('./' + process.env.VER + '.env')
      }
    }
    return {
      env: result.parsed
    }
  } catch (e) {
    console.error('env config 异常:')
    throw e
  }
};

module.exports = {
  properties,
  log4js,
  secret,
  getConfig,
};
