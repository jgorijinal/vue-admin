interface ResponseResult<T> {   // 请求返回的数据
  code: number,
  message:string,
  type:'success' | 'error',
  result: T   // 返回的类型要定制
}