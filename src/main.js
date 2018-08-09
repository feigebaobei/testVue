// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueDraggable from 'vue-draggable'
// import 'bootstrap/dist/css/bootstrap.css'
// import ElementUI from 'element-ui' // 全部引用
import {
  Button,
  Row,
  Col,
  Select,
  Option,
  Loading,
  Popover
} from 'element-ui' // 部分引用
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueDraggable)
// Vue.use(ElementUI) // 全部使用
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading)
Vue.use(Popover)

Vue.config.productionTip = false

Vue.prototype.$axios = axios
axios.defaults.headers.common['fromli'] = 'haha'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
