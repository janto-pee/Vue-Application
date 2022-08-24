import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import VeevalidatePlugin from './includes/validation'
// import router from './router'

import './assets/main.css'

const app = createApp(App)

    app.use(store)
    app.use(VeevalidatePlugin)
// app.use(router)

app.mount('#app')
