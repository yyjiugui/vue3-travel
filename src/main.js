import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/styles/index.css'
import 'assets/js/flexible'
// vue-awesome-swiper 2.6.7版本没问题 新版本有问题
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

createApp(App)
  .use(router)
  .use(store)
  .use(VueAwesomeSwiper)
  .mount('#app')
