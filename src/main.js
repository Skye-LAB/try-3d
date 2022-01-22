import { TroisJSVuePlugin } from "troisjs";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(TroisJSVuePlugin).mount("#app");
