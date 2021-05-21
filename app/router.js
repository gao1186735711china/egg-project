'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  // router.get('/', controller.home.index);
  router.post('/', controller.home.post);
  router.get('/topics', controller.topics.index);
  router.post('/topics', controller.topics.post);
  // router.resorces('topics', '/api/v2/topics', controller.topics);
};
