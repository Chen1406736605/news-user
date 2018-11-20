import Vue from 'vue'
import App from './App.vue'
import axios from './config/axios'
import router from './config/router'
import store from './config/store'

import {
  Tabbar,
  TabItem,
  Header,
  TabContainer,
  TabContainerItem,
  Cell
} from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Header.name, Header)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
