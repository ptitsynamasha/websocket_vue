import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import * as fb from 'firebase'
import BuyModalComponent from '@/components/Shared/BuyModal'
Vue.use(Vuetify);

Vue.config.productionTip = false;
Vue.component('app-buy-modal', BuyModalComponent);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDi0F_jJIYy_q1g66jHXdwe1heI0A2DCQw',
      authDomain: 'vue-websoket.firebaseapp.com',
      databaseURL: 'https://vue-websoket.firebaseio.com',
      projectId: 'vue-websoket',
      storageBucket: 'vue-websoket.appspot.com',
      messagingSenderId: '910321426132'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    });

    this.$store.dispatch('fetchObjects')
  }
});
