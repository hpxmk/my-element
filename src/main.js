/*
 * @Author: huangpx
 * @Date: 2023-03-07 21:37:58
 * @LastEditors: huangpx
 * @LastEditTime: 2023-03-08 16:08:20
 * @Description: file content
 */
import Vue from 'vue';

import App from './App.vue';
import '@/assets/theme-chalk/display.scss';
import '@/assets/theme-chalk/index.scss';
import './plugins/element';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
