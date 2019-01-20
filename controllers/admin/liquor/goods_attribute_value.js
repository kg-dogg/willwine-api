import { GoodsAttribute, GoodsAttributeValue } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

const TABLE_NAME = '属性值';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // attribute_id, value, sort_order

    try {
      // await GoodsAttributeValue.sync({ force: true });
      const data = await GoodsAttributeValue.create(newData);
      ctx.body = serializeSuccessBody({ msg: `创建[${TABLE_NAME}]成功`, data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const { id } = ctx.params;
      console.log('----GoodsAttributeValue----', id);
      const data = await GoodsAttributeValue.findAll({
        where: { attribute_id: id },
      });
      ctx.body = serializeSuccessBody({ msg: `获取[${TABLE_NAME}]成功`, data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  getAggregationByCategoryId: async (ctx) => {
    try {
      const { id } = ctx.params;
      const data = await GoodsAttribute.findAll({
        attributes: ['id', 'name', 'input_type'],
        where: { attribute_category_id: id },
        order: ['sort_order'],
        include: {
          model: GoodsAttributeValue,
          attributes: ['id', 'value'],
        },
      });
      
      ctx.body = serializeSuccessBody({ msg: `获取[${TABLE_NAME}]成功`, data });
    } catch (err) {
      console.log(err);
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  put: async (ctx) => {
    const { id, value, sort_order } = ctx.request.body;
    try {
      const data = await GoodsAttributeValue.update({ value, sort_order }, { where: { id } });
      ctx.body = serializeSuccessBody({ msg: `更新[${TABLE_NAME}]成功`, data });
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
