import Vue from 'vue'
import App from './App.vue'
// import './base.css'
import {Button} from 'mint-ui'


//注册为全局
Vue.component(Button.name,Button)
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
