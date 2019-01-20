import { GoodsSKUCategory } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // name

    try {
      // await GoodsSKUCategory.sync({ force: true });
      const data = await GoodsSKUCategory.create(newData);
      ctx.body = serializeSuccessBody({ msg: '获取[sku类型]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await GoodsSKUCategory.findAll();
      ctx.body = serializeSuccessBody({ msg: '获取[sku类型]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};