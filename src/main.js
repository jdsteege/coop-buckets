/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import { VueFire } from "vuefire";
import { firebaseApp } from "./db/firebaseRef";

const app = createApp(App);

app.use(VueFire, {
  firebaseApp: firebaseApp,
  modules: [],
});

registerPlugins(app);

app.mount("#app");
