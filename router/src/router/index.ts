import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { App } from "vue";
import routes from "./routes";
import AutoloadRoutes from "./autoload";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...AutoloadRoutes],
});
// console.log(getRoutes())
export function setupRouter(app: App) {
  app.use(router);
}

export default router;
