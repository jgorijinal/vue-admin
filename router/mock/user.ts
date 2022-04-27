import {MockMethod} from 'vite-plugin-mock';
import {Random} from 'mockjs';

export default [

  {
    url: '/api/info',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 200,
        message:'请求成功',
        type:'success',
        result: {
          name: 'frank',
          age:18
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 200,
        message:'登录成功',
        type:'success',
        result: {
          token:Random.string(10)
        },
      }
    },
  },
] as MockMethod[];
//http://localhost:3000/api/info 测试数据