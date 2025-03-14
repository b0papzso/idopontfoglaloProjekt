import './assets/main.css'
import "vue-toastification/dist/index.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Toast  from 'vue-toastification'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const options = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true
}
app.use(Toast, options)

app.mount('#app')
