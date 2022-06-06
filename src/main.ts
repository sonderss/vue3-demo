import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
const app = createApp(App);
app.use(router);
app.use(antd); // 打包时使用
app.mount("#app");
