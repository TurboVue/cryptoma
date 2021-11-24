import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
// import router from './router'
import "tailwindcss/tailwind.css";
import "./registerServiceWorker";
import router from "./router";
import axios from "axios";
import store from "./store";
import refresh from "@/services/refresh";
import VueClickAway from "vue3-click-away";
import ToastService from "primevue/toastservice";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
// import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import PrimeVue from "primevue/config";
import "nprogress/nprogress.css";
import Ripple from "primevue/ripple";
require("@/store/subscriber");
import BtnSpinner from "@/components/BtnSpinner.vue";
import EyeIcon from "@/components/reusables_/EyeIcon.vue";
import GoBack from "@/components/reusables_/GoBack.vue";
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'
axios.defaults.baseURL = "https://cryptoexbe.herokuapp.com/api/v1";
refresh();
import mixins from "@/mixins/";
// import store from './store'
const app = createApp(App);
app.component("BtnSpinner", BtnSpinner);
app.component("EyeIcon", EyeIcon);
app.component("GoBack", GoBack);
// .use(VueSplide)
app
  .use(VueClickAway)
  .mixin(mixins)
  .directive("ripple", Ripple)
  .use(PrimeVue, { ripple: true })
  .use(store)
  .use(ToastService)
  .use(router)
  .mount("#app");
