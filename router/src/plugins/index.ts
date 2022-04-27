import {App} from 'vue';
import {setupTailwindcss} from '@/plugins/tailwindcss';
import _ from 'lodash'
export function setupPlugins(app:App) {
  setupTailwindcss()
  autoRegisterComponent(app)
}

// 全局自动注册组件函数
function  autoRegisterComponent(app:App){
  const components= import.meta.globEager('../components/form/*.vue')
  Object.keys(components).forEach((key)=>{
    const name = _.camelCase(key.split('/').pop()?.split('.').shift() as string)
    console.log(name)
    app.component(name , components[key].default)
  })
}