import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import store from '@/store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import * as API from '@/api'
import { MessageBox} from 'element-ui';
import VueLazyload from 'vue-lazyload'

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false
// Vue.use(VueLazyload, {
//   loading: loadimage,
// })

import "@/plugins/validate"
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  },
  router,
  store
}).$mount('#app')


