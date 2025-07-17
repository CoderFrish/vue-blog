import { createApp } from 'vue'
import Router from '@/router'
import App from '@/App.vue'

import 'tdesign-vue-next/es/style/index.css'
import '@/style/theme.css'
import '@/style/global.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const Pinia = createPinia()
Pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(Router)
app.use(Pinia)
app.mount('#app')
