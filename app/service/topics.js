/**
 * @author GaoPeng
 * @date 2021-05-21 10:57
 */
// eslint-disable-next-line strict
const Service = require('egg').Service;

class TopicService extends Service {

  // async request(url, opts) {
  //   url = `${this.root}${url}`;
  //   opts = Object.assign({
  //     timeout: [ '30s', '30s' ],
  //     dataType: 'json',
  //   }, opts);
  //   return this.ctx.curl(url, opts);
  // }

  async post(params) {
    const result = await this.app.mysql.get('g_user', {
      id: params.id,
    });
    // this.checkSuccess(result);

    console.log(result, 'resultresult');
    // return result;
    return {
      key: '呵呵呵呵呵呵',
    };
  }

  async get(params) {
    console.log(params, '查询的query');
    const result = await this.app.mysql.get('g_user', {
      id: params.id,
    });
    this.checkSuccess(result);
    return this.checkSuccess(result);
  }


  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess(result) {
    return {
      status: 'success',
      code: '200',
      data: result,
    };


    // if (result.status !== 200) {
    //   const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
    //   this.ctx.throw(result.status, errorMsg);
    // }
    // if (!result.data.success) {
    //   // 远程调用返回格式错误
    //   this.ctx.throw(500, 'remote response error', { data: result.data });
    // }
  }
}

module.exports = TopicService;
