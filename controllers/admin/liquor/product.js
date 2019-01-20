import { Product } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // product_category_id, name, subtitle, main_image
    // sub_images, detail, sort_order

    try {
      // await Product.sync({ force: true });
      const data = await Product.create(newData);
      ctx.body = serializeSuccessBody({ msg: '创建[产品]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await Product.findAll({
        where: { enabled: 1 },
      });
      ctx.body = serializeSuccessBody({ msg: '获取[产品]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};
