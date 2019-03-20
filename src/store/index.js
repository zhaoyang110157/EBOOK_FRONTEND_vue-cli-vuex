import Vue from 'vue'
import Vuex from 'vuex'

import Cart from './modules/Cart'
import Person from './modules/Person'
import Books from './modules/Books'

Vue.use(Vuex);export default new Vuex.Store({
    modules: {
        Cart,
        Person,
        Books,
    },
})