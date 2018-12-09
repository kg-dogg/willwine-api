/**
 * Created by hnzb on 16/6/14.
 */


const env = process.env.NODE_ENV || 'development';

const conPath = `${process.cwd()}/config/`;

const configPath = `${conPath}db.json`;
const propertiesPath = `${conPath}properties.json`;
const log4jsPath = `${conPath}log4js.json`;

const config = require(configPath)[env];
const properties =  require(propertiesPath)[env];
const log4js =  require(log4jsPath);

module.exports = {
  config,
  properties,
  log4js,
};
