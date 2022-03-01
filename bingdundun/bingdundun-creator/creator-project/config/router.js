const router = {
  // demo 'platform/doctor-recipe/'
  path: '%{path}',
  component: '/src/pages',
  routes: [
    {
      title: '测试',
      path: 'test',
      component: 'Test',
      author: 'huzhang',
    }
  ],
};

module.exports = router;
