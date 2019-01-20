import { Specification } from '../../../models/admin/attribute';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // name, sort_order

    try {
      await Specification.sync({ force: true });
      const data = await Specification.create(newData);
      ctx.body = JSON.stringify({ result: { msg: '创建[规格]成功', data: data.dataValues } });
    } catch (err) {
      console.log(err);
      ctx.body = JSON.stringify({ result: { error: err } });
    }
  },
};
