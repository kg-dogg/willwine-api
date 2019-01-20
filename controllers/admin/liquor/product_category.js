// import { Op } from 'sequelize';
import { ProductCategory } from '../../../models/common/liquor';
import { serializeSuccessBody, serializeErrorBody } from '../../../tools/content';

export default {
  create: async (ctx) => {
    const newData = ctx.request.body;
    // parent_id, name, sort_order

    try {
      // await ProductCategory.sync({ force: true });
      const data = await ProductCategory.create(newData);
      ctx.body = serializeSuccessBody({ msg: '创建[产品分类]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
  get: async (ctx) => {
    try {
      const data = await ProductCategory.findAll({
        attributes: ['id', 'name', 'parent_id', 'enabled'],
        where: {
          enabled: 1,
          // parent_id: {
          //   [Op.gt]: 0,
          // },
        },
      });
      ctx.body = serializeSuccessBody({ msg: '获取[产品分类]成功', data });
    } catch (err) {
      ctx.body = serializeErrorBody({ code: 500, msg: err });
    }
  },
};
