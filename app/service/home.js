const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.app.mysql.get('g_user', {
      id: 3,
    });
    return user;
  }
}

module.exports = UserService;
