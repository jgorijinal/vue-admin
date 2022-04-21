import * as _ from 'lodash'

export function  parseEnv(env:Record<string,any>) { //转换env环境变量的函数
    const envs = _.cloneDeep(env)
  console.log(envs)
    Object.entries(envs).forEach(([key,value])=>{
      if(value === 'true' || value === 'false') {
        envs[key] = value === 'true'
       }
      if(/^\d+$/.test(value)) {
        envs[key] = parseInt(value)
      }
    })
  return envs
}