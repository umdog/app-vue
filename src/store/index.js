import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_login : false,
    show_insert : false,
    host: 'http://39.108.216.184',
    user_inf : {},
    with_chat : 'community',
    with_chat_index:0,
    show_mute : false
  }
})
