import { Axios } from './Axios';

const http = new Axios({  //创建axios实例
  baseURL:'/api',
  timeout:10000,
  headers:{

  }
})

export  { http }  //把实例导出