// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
var config = {
  apiKey: 'AIzaSyCPbKe7rLyVdQEvoXctAcz6qgf__tprwCE',
  authDomain: 'clientesw4l.firebaseapp.com',
  databaseURL: 'https://clientesw4l.firebaseio.com',
  projectId: 'clientesw4l',
  storageBucket: 'clientesw4l.appspot.com',
  messagingSenderId: '195474509014'
}

firebase.initializeApp(config)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
