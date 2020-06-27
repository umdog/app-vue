import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_login : false,
    show_insert : false,
    user_inf : {
      is_me : 1,
      user_name : 'admin',
      head : 'A',
      message : ''
    }
  }
})
