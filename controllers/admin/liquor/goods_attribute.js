import { GoodsAttribute } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // name, attribute_category_id, input_type

    try {
      // await GoodsAttribute.sync({ force: true });
      const data = await GoodsAttribute.create(newData);
      ctx.body = serializeSuccessBody({ msg: '创建[属性名]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const { id } = ctx.params;
      const data = await GoodsAttribute.findAll({
        attributes: ['id', 'name', 'input_type', 'sort_order'],
        where: { attribute_category_id: id },
        order: [['id', 'DESC']],
      });
      ctx.body = serializeSuccessBody({ msg: '获取[属性名]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  getOne: async (ctx) => {
    try {
      const { id } = ctx.params;
      const data = await GoodsAttribute.findOne({
        attributes: ['name'],
        where: { id },
      });
      ctx.body = serializeSuccessBody({ msg: '获取[属性名]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  put: async (ctx) => {
    const { id, name, input_type, sort_order } = ctx.request.body;
    try {
      const data = await GoodsAttribute.update(
        { name, input_type, sort_order },
        { where: { id } },
      );
      ctx.body = serializeSuccessBody({ msg: '更新[属性名]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  delete: async (ctx) => {
    try {
      ctx.body = JSON.stringify({
        code: 202,
        msg: '此数据暂不支持删除',
      });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};
