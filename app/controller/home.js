'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
		const {
			ctx
		} = this;
		ctx.body = {
			'message': '成功',
			data: {
				key: ctx.csrf
			}
		}
	}
	async post() {
		// const userId = ctx.params.id || '';
		const userInfo = await this.ctx.service.home.find();
		this.ctx.body = userInfo;
		// this.ctx.body = {
		// 	'message': '成功',
		// 	data: {
		// 		key: '1234567'
		// 	}
		// }
	}
}

module.exports = HomeController;
