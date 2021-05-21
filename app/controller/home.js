'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    const {
      ctx,
    } = this;
    // ctx.throw(500, '故意出错');
    // // ctx.body = 'hi, egg';
    // console.log(ctx.request.body, '------body--------');
    // ctx.body = ctx.request.body;
    ctx.body = {
      message: '成功',
      data: {
        key: ctx.csrf,
      },
    };
  }

  async post() {
    // const userId = ctx.params.id || '';
    const userInfo = await this.ctx.service.home.find();
    if (userInfo) {
      this.ctx.body = userInfo;
    } else {
      this.ctx.throw(500, '故意出错');
      this.ctx.body = this.ctx.request.body;
    }
    // this.ctx.body = {
    // 	'message': '成功',
    // 	data: {
    // 		key: '1234567'
    // 	}
    // }
  }
}

module.exports = HomeController;
