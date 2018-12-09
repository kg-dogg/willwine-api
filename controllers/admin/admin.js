import moment from 'moment';
import { Admin} from '../../models';
import { cryptPwd, checkPwd, createToken } from '../../tools/common';

export default {
  createAdmin: async (ctx, next) => {
    const { result, salt } = cryptPwd('123456');
    const newAdmin = {
      username: 'admin1',
      password: result,
      password_salt: salt,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      is_delete: false,
      timestamp_at: moment().format('X')
    };
    try {
      Admin.create(newAdmin);
    } catch (err) {
      console.error('添加管理员出错', err, Admin);
    }
  },
  login: async (ctx, next) => {
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
        ctx.set("Content-Type", "application/json");
        if (isCorrect) {
          const token = createToken({ name: username });
          ctx.body = JSON.stringify({ data: { uuid, username, token } });
        } else {
          ctx.body = JSON.stringify({ error: '登录失败' });
        }
      } else {
        ctx.set("Content-Type", "application/json");
        ctx.body = JSON.stringify({ error: '用户不存在' });
      }
    } catch (err) {
      console.error('管理员登录出错', err, Admin);
    }
  },
};