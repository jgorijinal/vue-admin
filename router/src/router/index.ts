import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import {App} from 'vue';
import routes from './routes';
import { getRoutes } from './autoload'
const router = createRouter({
  history: createWebHashHistory(),
  routes : [...routes , ...getRoutes()]
});
// console.log(getRoutes())
export function setupRouter(app: App) {
  app.use(router);
}

export default router;