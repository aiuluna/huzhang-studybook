
const { ModuleFederationPlugin } = require('webpack').container;
const router = require('./router');

const localOrigin = '//172.16.21.206:9090'
// const localOrigin = '//dev5.m.myweimai.com'
const config = (env) => [
  new ModuleFederationPlugin({
    name: "weimaiUI",
    remotes: {
      recipeComponents: env !== 'production' ? `weimaiUI@${localOrigin}/platform/recipe-components/recipe-components.js`
        : `promise new Promise(
          ${getDyamicModules
          .toString()
          .replace('routersSlot', JSON.stringify(router.routes.filter(e => e.needMF)))
        })`
    },
    shared: { react: { singleton: true }, "react-dom": { singleton: true } },
  })
]

const getDyamicModules = (resolve) => {
  // const urlParams = new URLSearchParams(window.location.search)
  // const version = urlParams.get('app1VersionParam')
  // This part depends on how you plan on hosting and versioning your federated modules
  const routes = routersSlot;
  // router.routes.filter(e => e.needMF);
  // 非邦联页面 过滤
  const needMF = routes.some(e => window.location.pathname.includes(e.path))
  if (!needMF) {
    return
  }
  let urlPrefix = window.location.origin
  if (window.location.host === 'm.myweimai.com') {
    urlPrefix = window.location.protocol + '//cdn.myweimai.com/assets'
  }
  const remoteUrlWithVersion = urlPrefix + '/platform/recipe-components/recipe-components.js'
  const script = document.createElement('script')
  script.src = remoteUrlWithVersion
  script.onload = () => {
    // the injected script has loaded and is available on window
    // we can now resolve this Promise
    const proxy = {
      get: (request) => window.weimaiUI.get(request),
      init: (arg) => {
        try {
          return window.weimaiUI.init(arg)
        } catch (e) {
          console.log('remote container already initialized')
        }
      }
    }
    resolve(proxy)
  }
  // inject this script with the src set to the versioned remoteEntry.js
  document.head.appendChild(script);
}

module.exports = config;
