import Vue from 'vue'
import App from './App.vue'
import router from './router'
import GoogleAuth from './google'

const gauthOptions = {
    client_id: '689217686363-o57mhgp17553uibqed439j0u2mk3sc54.apps.googleusercontent.com',
    cookiepolicy: 'single_host_origin',
};

Vue.use(GoogleAuth, gauthOptions);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
