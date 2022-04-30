import {ConfigEnv,  loadEnv} from 'vite';
import alias from './vite/alias';
import {parseEnv} from './vite/util';
import setupPlugins from './vite/plugins';

export default ({command, mode}: ConfigEnv) => {   //command是生产环境, mode是运行模式 'development'（serve），'production'（build）
  const isBuild = command === 'build'; //是否编译模式
  const root = process.cwd()  //项目根目录
  const env = parseEnv(loadEnv(mode , root))
  return {
    plugins: setupPlugins(isBuild,env),
    resolve: {alias}
  };
}