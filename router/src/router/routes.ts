import {RouteRecordRaw} from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/admin.vue'),
      children:[
        {path:'admin' , component:()=>import('@/views/Home.vue')}
      ]
    }
  ] as RouteRecordRaw[]
export default routes