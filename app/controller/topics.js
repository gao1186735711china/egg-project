/**
 * @author GaoPeng
 * @date 2021-05-21 10:45
 */
'use strict';

const TopicsController = require('egg').Controller;

// 定义创建接口的请求参数规则
// const createRule = {
//   accessToken: 'string',
//   title: 'string',
//   tab: {
//     type: 'enum',
//     values: [ 'ask', 'share', 'job' ],
//     required: false,
//     content: 'string',
//   },
// };

class TopicController extends TopicsController {


  async post() {
    const { ctx } = this;

    console.log(ctx.params, 'params');
    ctx.body = await ctx.service.topics.post({
      id: ctx.params.id,

    });
  }

  async index() {
    const { ctx } = this;

    console.log(ctx.query, 'query');
    if (ctx.query.id) {
      ctx.body = await ctx.service.topics.get({
        id: ctx.query.id,
      });
    } else {
      ctx.throw(500, '缺少id');
    }

  }

}

module.exports = TopicController;
