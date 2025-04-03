import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/css/app.css";
import "@/assets/css/font-awesome-6-pro-main/css/all.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia";

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
