import yup from './yup'
import * as veeValidate from 'vee-validate';
import rules from '@vee-validate/rules'
import { defineRule } from 'vee-validate'
import { localize , loadLocaleFromURL } from '@vee-validate/i18n';
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json');

//中文消息定义
veeValidate.configure({
  generateMessage: localize('zh_CN')
});

//批量定义规则
Object.keys(rules).forEach((key) => {
  defineRule(key, rules[key])
})

//合并导出
const modules = { yup, ...veeValidate }

export default modules