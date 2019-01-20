import { Supplier } from '../../models';
import { serializeSuccessBody, serializeErrorBody } from '../../tools/content';

const TABLE_NAME = '商户';

export default {
  create: async (ctx) => {
    const { name } = ctx.request.body;
    const newData = {
      name,
    };

    try {
      // await Supplier.sync({ force: true });
      const data = await Supplier.create(newData);
      ctx.body = serializeSuccessBody({ msg: `创建[${TABLE_NAME}]成功`, data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await Supplier.findAll({
        attributes: ['id', 'name', 'goods_count', 'sold_count'],
        where: { enabled: 1 },
        order: [['id', 'DESC']],
      });
      ctx.body = serializeSuccessBody({ msg: `获取[${TABLE_NAME}]成功`, data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  put: async (ctx) => {
    const { id, name } = ctx.request.body;
    try {
      const data = await Supplier.update({ name }, { where: { id } });
      ctx.body = serializeSuccessBody({ msg: `更新[${TABLE_NAME}]成功`, data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  delete: async (ctx) => {
    const { id } = ctx.request.body;
    try {
      const data = await Supplier.update({ enabled: 0 }, { where: { id } });
      ctx.body = serializeSuccessBody({ msg: `删除[${TABLE_NAME}]成功`, data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};