import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/layui-src/dist/css/layui.css'

Vue.config.productionTip = false

//按需引入组件
import {
  Button, Input, Form, Layout,
  Menu, Icon, Slider, Card, Row, Col,
  Avatar, FormModel, Table, Popconfirm,
  Modal, Upload, Checkbox
} from 'ant-design-vue'
Vue.use(FormModel)
Vue.use(Slider)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(Layout)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Avatar)
Vue.use(Table)
Vue.use(Popconfirm)
Vue.use(Modal)
Vue.use(Upload)
Vue.use(Checkbox)
//按需引入组件




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
