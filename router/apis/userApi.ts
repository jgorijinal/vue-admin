import { http } from '../src/plugins/axios/index'
interface  User {
  name: string,
  age:number,
  avatar:string
}
 async function  info(){
   return  await http.request<User>({
    url:'info'
  })

}

async function login(){
  return await http.request({
    url:'login'
  })
}

export default {info , login}