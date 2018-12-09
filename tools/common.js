import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const getRandomSalt = () => Math.random().toString().slice(2, 5);
const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

const generateMD5 = ({ saltPassword }) => {
  const md5 = crypto.createHash('md5');
  return md5.update(saltPassword).digest('hex');
};

export const cryptPwd = ({ password }) => {
  const salt = getRandomSalt();
  const saltPassword = `${password}:${salt}`;
  const result = generateMD5({ saltPassword });
  return { salt, result };
};

export const checkPwd = ({ inputPwd, salt, dbPwd }) => {
  const saltPassword = `${inputPwd}:${salt}`;
  const result = generateMD5({ saltPassword });
  return result === dbPwd;
};

const oneSecond = 1;
const oneMinute = oneSecond * 60;
const oneHour = oneMinute * 60;
export const createToken = ({ name }) => {
  const content = { name };
  const privateKey = `${S4()}${S4()}${S4()}${S4()}`;
  const token = jwt.sign(content, privateKey, {
    expiresIn: oneHour * 8,
  });

  return token;
};
