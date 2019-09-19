
import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import About from './views/About.vue'
import Customers from './views/Customers.vue'
import Add from './views/Add.vue'
import CustomersDetails from './views/CustomersDetails.vue'
import Edit from './views/Edit.vue'


Vue.use(Router)

let routes = [
  { path: '/', component: Customers },
  { path: '/about', component: About },
  { path: '/add', component: Add },
  { path: '/customer/:id', component: CustomersDetails },
  { path: '/edit/:id', component: Edit },
  { path: '*', component: Customers },
]
export default new Router({
  mode: "history",
  routes,

})

