import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

const app = createApp(App);

// 中文配置
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");
