import './bootstrap';
import 'vue-final-modal/style.css'
import router from '@app/router'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'
import { createApp } from 'vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})
import App from '@app/App.vue'

const app = createApp(App)
const vfm = createVfm()

app.use(createPinia())
app.use(vuetify)
app.use(vfm)
app.use(router)

app.mount('#app')