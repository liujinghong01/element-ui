import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'

Vue.use(Router)

var routes = [
  {
    path: '/login',
    name: 'login',
    component: function (resolve) {
      require(['@/page/login'], resolve)
    }
  }
]



menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${sub.componentName}`)
    })
  })
})
console.log(routes)
export default new Router({ routes })
