import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import axios from 'axios' //引入axios

Vue.prototype.$ajax=axios //修改Vue的原型属性

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router,
  store,
  axios
}).$mount('#app');
