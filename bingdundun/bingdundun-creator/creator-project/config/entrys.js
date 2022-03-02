const path = require ('path');
const router = require ('./router');

function resolve (dir) {
  return path.join (__dirname, '..', router.component, dir);
}
let entrys = {
  globalParameters: {},
  list: router.routes.map (item => {
    return {
      entry: item.path,
      entryPath: resolve(item.component),
      title: item.title,
      template: item.template ? resolve(item.template) : path.resolve (__dirname, '..', 'index.ejs'),
    };
  })
};

module.exports = entrys;
