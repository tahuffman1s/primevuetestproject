import { createApp, defineComponent } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import CascadeSelect from 'primevue/cascadeselect';
import Knob from 'primevue/knob';
import router from './router';
import Rating from 'primevue/rating';
import Password from 'primevue/password';

const app = createApp(App).use(router)

app.use(PrimeVue);
app.component('CascadeSelect', CascadeSelect);
app.component('Knob', Knob);
app.component('Rating', Rating);
app.component('Password', Password);
app.mount('#app');