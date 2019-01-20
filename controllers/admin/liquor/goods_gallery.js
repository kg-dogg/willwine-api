import { GoodsGallery } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // goods_id, img_url, img_desc

    try {
      await GoodsGallery.sync({ force: true });
      const data = await GoodsGallery.create(newData);
      ctx.body = serializeSuccessBody({ msg: '创建[商品图片]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await GoodsGallery.findAll();
      ctx.body = serializeSuccessBody({ msg: '获取[商品图片]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};
