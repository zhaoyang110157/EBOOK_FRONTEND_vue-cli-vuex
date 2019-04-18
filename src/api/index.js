import axios from './axios'
import Vue from 'vue'
axios.defaults.baseURL="http://localhost:8000/serv_war_exploded/"
Vue.prototype.$ajax = axios
