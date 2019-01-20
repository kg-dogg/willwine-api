import { GoodsSKUKey } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // sku_category_id, name, sort_order

    try {
      // await GoodsSKUKey.sync({ force: true });
      const data = await GoodsSKUKey.create(newData);
      ctx.body = serializeSuccessBody({ msg: '创建[sku key]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await GoodsSKUKey.findAll();
      ctx.body = serializeSuccessBody({ msg: '获取[sku key]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};
