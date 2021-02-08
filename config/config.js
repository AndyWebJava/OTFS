// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome',
              icon: 'smile',
              component: './Welcome',
              hideInMenu: 'true',
            },
            {
              path: '/manufacture',
              authority: ['/manufacture', 'admin'],
              name: 'manufacture',
              icon: 'build',
              routes: [
                {
                  path: '/product',
                  redirect: '/manufacture/product/types',
                  authority: ['/manufacture/product/types', 'admin'],
                },
                {
                  name: 'product-types',
                  icon: 'bulb',
                  path: '/manufacture/product/types',
                  authority: ['/manufacture/product/types', 'admin'],
                  component: './product/TypesList',
                },
                {
                  name: 'product-products',
                  icon: 'smile',
                  path: '/manufacture/product/productList',
                  authority: ['/manufacture/product/productList', 'admin'],
                  component: './product/ProductList',
                },
                {
                  name: 'product-detail',
                  icon: 'smile',
                  path: '/manufacture/product/ProductList/components/detail',
                  authority: ['/manufacture/product/ProductList/components/detail', 'admin'],
                  component: './product/ProductList/components/ProductDetail',
                  hideInMenu: true,
                },
                {
                  name: 'product-funcParams',
                  icon: 'smile',
                  path: '/manufacture/product/ProductList/components/funcParams',
                  authority: ['/manufacture/product/ProductList/components/funcParams', 'admin'],
                  component: './product/ProductList/components/ProductFuncParams',
                  hideInMenu: true,
                },
                {
                  name: 'sku',
                  icon: 'smile',
                  path: '/manufacture/sku',
                  authority: ['/manufacture/sku', 'admin'],
                  component: './manufacture/SkuManagement',
                },
                {
                  name: 'sku-edit',
                  path: '/manufacture/sku/editSku',
                  authority: ['/manufacture/sku/editSku', 'admin'],
                  component: './manufacture/SkuManagement/components/EditSku',
                },
                {
                  name: 'sku-create',
                  path: '/manufacture/sku/createSku',
                  authority: ['/manufacture/sku/createSku', 'admin'],
                  component: './manufacture/SkuManagement/components/CreateSku',
                },
                {
                  name: 'sku-detail',
                  path: '/manufacture/sku/detailSku',
                  authority: ['/manufacture/sku/detailSku', 'admin'],
                  component: './manufacture/SkuManagement/components/DetailSku',
                },
                {
                  name: 'batch',
                  path: '/manufacture/batch',
                  authority: ['/manufacture/batch', 'admin'],
                  component: './manufacture/BatchManagement',
                },
                {
                  name: 'register',
                  path: '/manufacture/register',
                  authority: ['/manufacture/register', 'admin'],
                  component: './manufacture/DeviceList',
                },
                {
                  name: 'syncDevice',
                  path: '/manufacture/syncdevice',
                  component: './manufacture/SyncDeviceList',
                  hideInMenu: true,
                },
                {
                  name: 'detail',
                  path: '/manufacture/device/detail',
                  authority: ['/manufacture/device/detail', 'admin'],
                  component: './manufacture/DeviceDetail',
                  hideInMenu: 'true',
                },
              ],
            },
            {
              path: '/device-admin',
              authority: ['/device-admin', 'admin'],
              name: 'device-admin',
              icon: 'desktop',
              routes: [
                {
                  path: '/device-admin',
                  redirect: '/device-admin/list',
                  authority: ['/device-admin/list', 'admin'],
                },
                {
                  name: 'list',
                  path: '/device-admin/list',
                  authority: ['/device-admin/list', 'admin'],
                  component: './device/DeviceList',
                  icon: 'hdd',
                },
                {
                  name: 'detail',
                  path: '/device-admin/detail',
                  authority: ['/device-admin/detail', 'admin'],
                  component: './device/DeviceDetail',
                  hideInMenu: 'true',
                },
                {
                  name: 'ota-app-AppVerification',
                  path: '/device-admin/ota-app/AppVerification',
                  authority: ['/device-admin/ota-app/AppVerification', 'admin'],
                  component: './device/OtaAppList/components/AppVerification',
                  hideInMenu: true,
                },
                {
                  name: 'ota-app-test-whitelist-management',
                  path: '/device-admin/ota-app/AppTestWhitelistManagement',
                  authority: ['/device-admin/ota-app/AppTestWhitelistManagement', 'admin'],
                  component: './device/OtaAppList/components/AppTestWhitelistManagement',
                  hideInMenu: true,
                },
                {
                  name: 'ota-app-issue',
                  path: '/device-admin/ota-app/issue',
                  authority: ['/device-admin/ota-app/issue', 'admin'],
                  component: './device/OtaAppList/components/AppIssue',
                  hideInMenu: true,
                },
                {
                  name: 'message-list',
                  path: '/device-admin/message/list',
                  component: './message/MessageList',
                  authority: ['/device-admin/message/list', 'admin'],
                  icon: 'hdd',
                },
                {
                  name: 'message-create',
                  path: '/device-admin/message/components/create',
                  component: './message/MessageList/components/Create',
                  //authority: ['/device-admin/message/components/create', 'admin'],
                  hideInMenu: true,
                },
                {
                  name: 'message-detail',
                  path: '/device-admin/message/components/detail',
                  component: './message/MessageList/components/Detail',
                  //authority: ['/device-admin/message/components/create', 'admin'],
                  hideInMenu: true,
                },
                {
                  name: 'app-user-feedback-list',
                  path: '/device-admin/app-user/feedback-list',
                  component: './app-user/FeedbackList',
                  authority: ['/device-admin/app-user/feedback-list', 'admin'],
                  icon: 'partition',
                },
                {
                  name: 'app-user-handle',
                  path: '/device-admin/app-user/feedback-list/handle',
                  authority: ['/device-admin/app-user/feedback-list/handle', 'admin'],
                  component: './app-user/FeedbackList/components/Handle',
                  hideInMenu: 'true',
                },
                {
                  name: 'app-user-handle-results',
                  path: '/device-admin/app-user/feedback-list/handle-results',
                  authority: ['/device-admin/app-user/feedback-list/handle-results', 'admin'],
                  component: './app-user/FeedbackList/components/HandleResults',
                  hideInMenu: 'true',
                },
              ],
            },
            {
              path: '/sys',
              name: 'sys',
              icon: 'apartment',
              authority: ['/sys', 'admin'],
              routes: [
                {
                  name: 'admin-user-list',
                  path: '/sys/admin-user-list',
                  component: './sys/AdminUserList',
                  authority: ['/sys/admin-user-list', 'admin'],
                  icon: 'hdd',
                },
                {
                  name: 'role-list',
                  path: '/sys/role-list',
                  component: './sys/RoleList',
                  authority: ['/sys/role-list', 'admin'],
                  icon: 'hdd',
                },
              ],
            },
            {
              path: '/drawing-tools',
              name: 'drawing-tools',
              icon: 'tool',
              authority: ['/drawing-tools', 'admin'],
              hideInMenu: 'true',
              routes: [
                {
                  name: 'fr-generator',
                  path: '/drawing-tools/fr-generator',
                  component: './drawing-tools/fr-generator',
                  authority: ['/drawing-tools/fr-generator', 'admin'],
                  icon: 'container',
                  hideInMenu: 'true',
                },
              ],
            },
            {
              path: '/workflow-management',
              name: 'workflow-management',
              icon: 'tool',
              authority: ['/workflow-management', 'admin'],
              routes: [
                {
                  name: 'flow-new',
                  path: '/workflow-management/flow-new',
                  component: './workflow/NewWorkflow',
                  authority: ['/workflow-management/flow-new', 'admin'],
                  icon: 'container',
                },
                {
                  name: 'taxi-reimbursement',
                  path: '/workflow-management/taxi-reimbursement',
                  hideInMenu: 'true',
                  component: './workflow/NewWorkflow/components/TaxiReimbursement',
                  authority: ['/workflow-management/taxi-reimbursement', 'admin'],
                  icon: 'container',
                },
                {
                  name: 'model-list',
                  path: '/workflow-management/model-list',
                  component: './workflow/ModelList',
                  authority: ['/workflow-management/model-list', 'admin'],
                  icon: 'container',
                },
                {
                  name: 'flow-list',
                  path: '/workflow-management/flow-list',
                  component: './workflow/FlowList',
                  authority: ['/workflow-management/flow-list', 'admin'],
                  icon: 'container',
                },
                {
                  name: 'template-list',
                  path: '/workflow-management/template-list',
                  component: './sys/TemplateList',
                  authority: ['/workflow-management/template-list', 'admin'],
                  icon: 'hdd',
                },
                {
                  name: 'template-edit',
                  path: '/workflow-management/template-list/edit',
                  component: './sys/TemplateList/components/UpdateForm',
                  authority: ['/workflow-management/template-list/edit', 'admin'],
                  hideInMenu: 'true',
                },
              ],
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
