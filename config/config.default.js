/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1621315705794_7568';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    config.security = {
        headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    };
    config.cors = {
        origin: "http://39.101.70.5",
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    // config/config.${env}.js
    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: '39.101.70.5',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: 'GAOpeng00.',
            // 数据库名
            database: 'demo1',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };


    return {
        ...config,
        ...userConfig,
    };
};