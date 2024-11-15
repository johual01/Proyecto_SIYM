import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import Tooltip from 'primevue/tooltip';
import router from './router';
import 'primeicons/primeicons.css';
import ConfirmationService from 'primevue/confirmationservice';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faScroll, faScrewdriverWrench, faVirus } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret);
library.add(faScroll);
library.add(faScrewdriverWrench);
library.add(faVirus);

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.directive('tooltip', Tooltip);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(ConfirmationService);
app.mount("#app");