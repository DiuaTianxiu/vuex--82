import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import { Button, Field, Icon, Cell, CellGroup, Toast } from 'vant'
Vue.use(Toast)
Vue.use(Cell).use(CellGroup)
Vue.use(Icon)
Vue.use(Field)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
