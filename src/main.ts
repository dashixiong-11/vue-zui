import "./lib/gulu.scss";
import "./index.scss";
import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router";
import './assets/svg.js'
import Markdown from './components/Markdown.vue';
import registerZUI from './lib/index'
import 'github-markdown-css'

const app = createApp(App);
app.use(router);
app.use(registerZUI)
app.mount("#app");
app.component("Markdown", Markdown)
