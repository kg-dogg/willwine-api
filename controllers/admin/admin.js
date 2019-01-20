import { Admin } from '../../models';
import { cryptPwd, checkPwd, createToken, verifyToken } from '../../tools/common';

export default {
  createAdmin: async (ctx) => {
    const { username, password } = ctx.request.body;
    const { result, salt } = cryptPwd({ password });
    const newAdmin = {
      username,
      password: result,
      password_salt: salt,
    };
    try {
      // await Admin.sync({ force: true });
      const data = await Admin.create(newAdmin);
      ctx.body = JSON.stringify({
        result: {
          msg: '创建管理员成功',
          data,
        },
      });
    } catch (err) {
      console.error('添加管理员出错', err, Admin);
      ctx.body = JSON.stringify({
        result: { error: err },
      });
    }
  },
  login: async (ctx) => {
    const {
      username: inputUname,
      password: inputPwd,
    } = ctx.request.body;
    try {
      const admin = await Admin.findOne({
        attributes: ['uuid', 'username', 'password', 'password_salt'],
        where: {
          username: inputUname,
          is_delete: false,
        },
      });
      if (admin) {
        const {
          dataValues: {
            uuid, username, password_salt, password,
          },
        } = admin;
        const isCorrect = checkPwd({
          inputPwd,
          salt: password_salt,
          dbPwd: password,
        });
        if (isCorrect) {
          const token = createToken({ name: username });
          ctx.body = JSON.stringify({
            result: {
              msg: '登录成功',
              data: { username, token },
            },
          });
        } else {
          ctx.body = JSON.stringify({
            result: { error: '登录失败' },
          });
        }
      } else {
        ctx.body = JSON.stringify({
          result: { error: '用户不存在' },
        });
      }
    } catch (err) {
      ctx.body = JSON.stringify({
        result: { error: err },
      });
    }
  },
  logout: async(ctx) => {
    ctx.body = JSON.stringify({
      result: {
        msg: '登出成功',
      },
    });
  },
  userInfo: async(ctx) => {
    const token = ctx.header.authorization; // 获取jwt
    if (token) {
      const payload = await verifyToken(token.split(' ')[1]); // 解密，获取payload
      ctx.body = { payload };
    } else {
      ctx.body = {
        message: 'token 错误',
        code: -1,
      }
    }
  },
};