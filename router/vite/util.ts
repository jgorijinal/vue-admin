import * as _ from 'lodash';

export function parseEnv(env: Record<string, any>) { //转换env环境变量的函数
  const envs = _.cloneDeep(env);

  Object.entries(envs).forEach(([key, value]) => {
    if (value === 'true' || value === 'false') {
      envs[key] = value === 'true';
    } else if (/^\d+$/.test(value)) {
      envs[key] = parseInt(value);
    } else if (value === 'null') {
      envs[key] = null;
    } else if (value === 'undefined') {
      envs[key] = undefined;
    }
  });
  return envs;
}