import './assets/main.css'

import { createApp } from 'vue'
//引入模板的全局样式
import '@/style/index.scss'
import pinia from './stores'
import router from './router'
//引入ElementPlus，下面设置ElementPlus为中文
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'

const app = createApp(App)
//element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
app.use(router)
//设置ElementPlus为中文
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
