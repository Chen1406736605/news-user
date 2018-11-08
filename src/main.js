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
  Tabs,
  Tab,
  NavBar,
  PullRefresh,
  List,
  Cell,
  Icon,
  Popup,
  CellGroup,
  Loading,
  Row,
  Col,
  Field,
  Uploader,
  Tag
} from 'vant';
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(NavBar)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Cell)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(CellGroup)
Vue.use(Loading)
Vue.use(Row)
Vue.use(Col)
Vue.use(Field)
Vue.use(Uploader)
Vue.use(Tag)
Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
