import { GoodsBrand } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // name, list_pic_url, simple_desc, pic_url

    try {
      // await GoodsBrand.sync({ force: true });
      const data = await GoodsBrand.create(newData);
      ctx.body = serializeSuccessBody({ msg: '创建[商品品牌]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await GoodsBrand.findAll();
      ctx.body = serializeSuccessBody({ msg: '获取[商品品牌]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};
