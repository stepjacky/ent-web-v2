import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { BootstrapVue } from 'bootstrap-vue'
import { useAntd } from 'k-form-design/packages/core/useComponents'
import KFormDesign from 'k-form-design/packages/use.js'
import 'k-form-design/lib/k-form-design.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueRouter)
Vue.use(PiniaVuePlugin)
Vue.use(KFormDesign)
Vue.use(BootstrapVue)
Vue.use(ElementUI)
useAntd(Vue)
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
const pinia = createPinia()
pinia.use(createPersistedState()) //开启缓存，存储在localstorage
new Vue({
  pinia,
  render: h => h(App),  
}).$mount('#app')
