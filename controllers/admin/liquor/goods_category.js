import { GoodsCategory } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // name, keywords, front_desc, banner_url
    // icon_url, img_url, wap_banner_url, level
    // front_name

    try {
      // await GoodsCategory.sync({ force: true });
      const data = await GoodsCategory.create(newData);
      ctx.body = serializeSuccessBody({ msg: '创建[商品分类]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await GoodsCategory.findAll();
      ctx.body = serializeSuccessBody({ msg: '获取[商品分类]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};
