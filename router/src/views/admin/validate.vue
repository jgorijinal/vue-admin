<script setup lang="ts">
// import {configure, defineRule, useField , useForm} from 'vee-validate';
// import {min , max , email , regex , required} from '@vee-validate/rules';
// import {localize} from '@vee-validate/i18n';
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';
// import  * as yup from 'yup'

// defineRule('required' , required)
// defineRule('email' , email)
//
// configure({
//   generateMessage: localize('zh_CN', zh_CN)
// });
import v from '@/plugins/validate'
const {yup , useForm , useField} = v

const {handleSubmit , errors} = useForm( {
   initialValues:{  //初始值
     username:'hello',
     password:''
   },
    validationSchema:{
        username:yup.string().email().required().label('用户名') , //链式调用
        password:yup.string().required().label('密码')
    }
})
const { value:usernameValue } = useField('username', {},{label:'用户名'})
const { value :passwordValue} = useField('password' , {},{label:'密码'})

const onSubmit = handleSubmit((values)=>{  //用 handleSubmit 包裹
  console.log(values)
  alert('验证通过')
})
</script>
<template>
<div>
  <form @submit="onSubmit">
    <div>
      <input type="text" v-model="usernameValue">
      <p v-if="errors.username">{{errors.username}}</p>
    </div>
    <div>
      <input type="password" v-model="passwordValue">
      <p v-if="errors.password">{{errors.password}}</p>
    </div>
    <button type="submit">提交</button>
  </form>
</div>
</template>
<style lang="scss" scoped>

</style>

