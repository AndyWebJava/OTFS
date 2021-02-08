/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/v1.0/': {
      target: 'http://127.0.0.1:10000', //local
      // target: 'http://120.76.139.33:10000', //dev
      // target: 'http://120.79.177.45:10000',//test
      // target: 'http://192.168.0.219:10000',//pro
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
    '/workflow/': {
      target: 'http://127.0.0.1:8083', //local
      // target: 'http://120.76.139.33:10000', //dev
      // target: 'http://120.79.177.45:10000',//test
      // target: 'http://192.168.0.219:10000',//pro
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  // test: {
  //   '/api/': {
  //     target: 'https://preview.pro.ant.design',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^': '',
  //     },
  //   },
  // },
  // pre: {
  //   '/api/': {
  //     target: 'your pre url',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^': '',
  //     },
  //   },
  //   '/**': {
  //     target: 'http://127.0.0.1:10040',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/': '',
  //     },
  //   },
  // },
};
