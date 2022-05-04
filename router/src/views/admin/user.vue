<script lang="ts" setup>
// import {Form, Field, ErrorMessage, defineRule, configure} from 'vee-validate';
// import {required, email, min, max, confirmed, regex} from '@vee-validate/rules';   //看文档

// import {localize} from '@vee-validate/i18n';
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';

// defineRule('required', required);
// defineRule('email', email);
//
// configure({
//   generateMessage: localize('zh_CN', zh_CN)
// });

// const validateEmail = (value:any) =>{
//   return /@/.test(value) ? true : '邮箱格式错误'    //要 return true
// }
import v from '@/plugins/validate'
const {Form , Field} = v
import {ref} from 'vue';
const account = ref<any>('');
const onSubmit = (values: any) => {
  console.log(values);   // {username: 'xxxx@123.com'}
  alert('验证通过时执行');
};

</script>
<template>
  <Form @submit="onSubmit">
    <Field
        name="username"
        :rules="{required: true , email: true }"
        label="账号" :validate-on-input="true"
        #default="{ errorMessage, field }">
      <input v-bind="field" type="text" v-model="account"/>
      <p>{{ errorMessage }}</p>
      <button>提交</button>
    </Field>
    <!-- <ErrorMessage name="username" /> -->
  </Form>
</template>
<style lang="scss" scoped>
input {
  border: 2px solid red;
}
</style>