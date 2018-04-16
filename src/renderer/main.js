// import Vue from 'vue'
// import axios from 'axios'
//
// import App from './App'
// import router from './router'
// import store from './store'
//
// if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.http = Vue.prototype.$http = axios
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   components: { App },
//   router,
//   store,
//   template: '<App/>'
// }).$mount('#app')
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App'
import router from './router'
// import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入db数据库
import db from '../datastore/index'
//引入需要支持的语言
// import languges from '../../i18n/languges'
import languges from '../../i18n/languges_conf'

Vue.prototype.$db = db
Vue.config.productionTip = false

Vue.use(VueI18n);
Vue.use(ElementUI);
// 加载i18语言
const messages={};
for(const languge in languges){
    messages[languge]=require("@/i18n/"+languge+".json");
}
// console.log(messages)

//判断用户使用的语言
var locale =db.get('czr_setting.lang').value() ;
//生成国际化插件实例
const i18n = new VueI18n({
    locale: locale ,// set locale
    messages, // set locale messages
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // store,
    i18n,
    render:h=>h(App)
})