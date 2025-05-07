import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(router);

AOS.init(); // activa las animaciones

app.mount('#app');
