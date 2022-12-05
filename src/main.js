import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/main.css";
import axios from "axios";

const app = createApp(App);

axios.defaults.baseUrl = import.meta.env.BASE_URL;
app.config.globalProperties.$axios = axios;

app.use(router);
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
