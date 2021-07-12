import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false

// This ensures that Vuetify's themes and components will be available throughout the Vue app.
new Vue({
	vuetify,
	render: (h) => h(App),
}).$mount('#app');

