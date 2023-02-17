import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { BootstrapVue } from 'bootstrap-vue'
import { useAntd } from 'k-form-design/packages/core/useComponents'
import KFormDesign from 'k-form-design/packages/use.js'
import 'k-form-design/lib/k-form-design.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
useAntd(Vue)
Vue.use(KFormDesign)
Vue.use(BootstrapVue)
Vue.use(ElementUI)

import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
