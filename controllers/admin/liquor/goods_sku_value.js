import { GoodsSKUValue } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // attribute_id, value, sort_order

    try {
      // await GoodsSKUValue.sync({ force: true });
      const data = await GoodsSKUValue.create(newData);
      ctx.body = serializeSuccessBody({ msg: '创建[sku value]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await GoodsSKUValue.findAll();
      ctx.body = serializeSuccessBody({ msg: '获取[sku value]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};
