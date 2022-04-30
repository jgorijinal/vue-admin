import {RouteRecordRaw} from 'vue-router';
import { env } from '@/util/helper';

//import.meta.globEager(pattern)
const layoutsModules = import.meta.globEager('../layouts/*.vue'); //获取布局路由
const viewsModules = import.meta.globEager('../views/**/*.vue');  //获取布局路由对应的子路由
//https://cn.vitejs.dev/guide/features.html#glob-import 看vite文档
//import.meta.globEager(pattern)
//返回的格式为, 例如
// {
//   './dir/foo.js': () => import('./dir/foo.js'),
//   './dir/bar.js': () => import('./dir/bar.js')
// }

function getRoutes(){
  const layoutsRoutes = [] as RouteRecordRaw[];

  Object.entries(layoutsModules).forEach(([file, module]) => {
    //file 打出来看看 :  `../layouts/Admin.vue`
    const layoutsRoute = getRouteByModules(file, module);
    layoutsRoute.children = getChildRouteByModules(layoutsRoute);  //添加 children

    layoutsRoutes.push(layoutsRoute);
  });
  return layoutsRoutes
}


function getRouteByModules(file: string, module: { [key: string]: any }) {
  const name = file.split('/').pop()?.split('.')[0].toLowerCase();
  const obj = {
    path: `/${name}`,
    name: name,
    component: module.default    // module.default
  } as RouteRecordRaw;
  return obj;
}

function getChildRouteByModules(layoutsRoute: RouteRecordRaw) {
  let childRoutes = [] as RouteRecordRaw[];  //子路由 children是数组
  Object.entries(viewsModules).forEach(([file, module]) => {
    if (file.includes(layoutsRoute.name as string)) {
      const childName = file.split('/').pop()?.split('.')[0];
      childRoutes.push(
        {                  // 单个子路由
          path: childName,
          name: childName,
          component: module.default
        } as RouteRecordRaw);
    }
  });
  return childRoutes;
}
const routes = env.VITE_ROUTER_AUTOLOAD ? getRoutes() : [] as RouteRecordRaw[]
export default  routes;