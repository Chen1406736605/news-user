import Vue from 'vue'
import App from './App.vue'
import axios from './config/axios'
import router from './config/router'
import store from './config/store'
import 'mint-ui/lib/style.css'

import {
  Tabbar,
  TabItem,
  Header,
  TabContainer,
  TabContainerItem,
  Cell,
  Button,
  Badge,
  Popup
} from 'mint-ui';

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Header.name, Header)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)
Vue.component(Button.name, Button)
Vue.component(Badge.name, Badge)
Vue.component(Popup.name, Popup)

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
