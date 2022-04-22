import * as _ from 'lodash';
 class Helper  {
  public env = {} as ImportMetaEnv

  constructor() {
    this.env = this.getEnvs()
  }
  private getEnvs():ImportMetaEnv {
    const envs = _.cloneDeep(import.meta.env)

    Object.entries(envs).forEach(([key,value])=>{
      if(value === 'true' || value === 'false') {
        envs[key] = value === 'true'
      }
      else if(/^\d+$/.test(value)) {
        envs[key] = parseInt(value)
      }else if (value ==='null') {
        envs[key] = null
      }else if (value ==='undefined') {
        envs[key] = undefined
      }
    })
    return envs
  }
}
const helper = new Helper()
const env = helper.env
export default helper
export { env }




