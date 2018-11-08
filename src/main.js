import Vue from 'vue'
import App from './App.vue'
import axios from './config/axios'
import router from './config/router'
import store from './config/store'

import {
  Button,
  Tabbar,
  TabbarItem,
  Search,
} from 'vant';

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.config.productionTip = false

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
