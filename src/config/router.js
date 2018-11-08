import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: () => import('../view/Index.vue'),
    children: [
      {path: '/', component: () => import('../view/Home.vue')},
      {path: '/release', component: () => import('../view/Release.vue')},
      {path: '/me', component: () => import('../view/Me.vue')},
      {path: '/login', component: () => import('../view/Login.vue')}
    ]}
  ]
})