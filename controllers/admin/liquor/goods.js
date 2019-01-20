import { Goods } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // category_id, goods_sn, name, brand_id
    // goods_number, keywords, goods_brief, goods_desc
    // attribute_list, primary_pic_url, list_pic_url
    // retail_price, primary_product_id, unit_price
    // promotion_desc, promotion_tag

    try {
      // await Goods.sync({ force: true });
      const data = await Goods.create(newData);
      ctx.body = serializeSuccessBody({ msg: '创建[商品]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await Goods.findAll({
        where: { is_delete: 0 },
      });
      ctx.body = serializeSuccessBody({ msg: '获取[商品]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};
