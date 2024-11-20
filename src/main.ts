import 'primeicons/primeicons.css';

import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
import App from '@/App.vue'


import './assets/main.css';
import DialogService from 'primevue/dialogservice';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import Toast from "primevue/toast";

import PrimevueConfig from "@/primevue.config";

import router from '@/router';

export const app = createApp(App);

app.use(router);
app.use(PrimeVue, PrimevueConfig);
app.use(DialogService);
app.use(ConfirmationService);
app.use(ToastService);
app.component("Toast", Toast);

app.mount('#app');

