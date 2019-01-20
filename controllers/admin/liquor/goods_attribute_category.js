import { GoodsAttributeCategory } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const { name } = ctx.request.body;
    const newData = {
      name,
    };

    try {
      // await GoodsAttributeCategory.sync({ force: true });
      const data = await GoodsAttributeCategory.create(newData);
      ctx.body = serializeSuccessBody({ msg: '创建[货物属性类型]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await GoodsAttributeCategory.findAll({
        attributes: ['id', 'name'],
        where: { enabled: 1 },
        order: [['id', 'DESC']],
      });
      ctx.body = serializeSuccessBody({ msg: '获取[货物属性类型]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  getById: async (ctx) => {
    try {
      const { id } = ctx.params;
      const data = await GoodsAttributeCategory.findOne({
        attributes: ['name'],
        where: { enabled: 1, id },
      });
      ctx.body = serializeSuccessBody({ msg: '获取[货物属性类型]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  put: async (ctx) => {
    const { id, name } = ctx.request.body;
    try {
      const data = await GoodsAttributeCategory.update({ name }, { where: { id } });
      ctx.body = serializeSuccessBody({ msg: '更新[货物属性类型]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  delete: async (ctx) => {
    const { id } = ctx.request.body;
    try {
      const data = await GoodsAttributeCategory.update({ enabled: 0 }, { where: { id } });
      ctx.body = serializeSuccessBody({ msg: '删除[货物属性类型]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};