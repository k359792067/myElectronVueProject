import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './config/axios'
import db from './config/datastore'
import ElementUI from 'element-ui'
// import './assets/css/main.css'
import 'element-ui/lib/theme-chalk/index.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.prototype.$http = axios
Vue.prototype.$db = db
Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  components: {
    App
  },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
