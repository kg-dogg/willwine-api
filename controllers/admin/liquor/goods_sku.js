import { GoodsSKU } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // goods_id, goods_specs, goods_sn
    // goods_number, retail_price, pic_url

    try {
      await GoodsSKU.sync({ force: true });
      const data = await GoodsSKU.create(newData);
      ctx.body = serializeSuccessBody({ msg: '创建[商品sku]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await GoodsSKU.findAll();
      ctx.body = serializeSuccessBody({ msg: '获取[商品sku]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};
