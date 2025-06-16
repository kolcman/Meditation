import './assets/main.css';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
=======
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { router } from './routes';

=======
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { router } from './routes';

>>>>>>> Stashed changes
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
