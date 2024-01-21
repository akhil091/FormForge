import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'material-symbols'

import './normalize.css'
import './style.css'
import './animate-overhaul.css'
import './extended-tailwind.css'

import App from './App.vue'

import 'highlight.js/lib/common'
import hljsVuePlugin from "@highlightjs/vue-plugin"
import 'highlight.js/styles/atom-one-dark.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
app.use(hljsVuePlugin);
app.use(VueSweetalert2);
app.use(createPinia());
app.mount('#app');

window.Swal = app.config.globalProperties.$swal;
