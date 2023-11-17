import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';
import '@/assets/style/_reset.css';
import * as icons from '@ant-design/icons-vue';
import type { Component } from 'vue';
import formCreate from '@form-create/ant-design-vue';
import install from '@form-create/ant-design-vue/auto-import';
const app = createApp(App);
app.use(router);

// 按需导入from-create
formCreate.use(install);
app.use(formCreate);

// 全局导入icon
const iconData: Record<string, Component> = icons;
Object.keys(iconData).forEach((key) => {
    app.component(key, iconData[key]);
});

app.mount('#app');
