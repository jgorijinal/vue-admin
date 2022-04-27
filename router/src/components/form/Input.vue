<script setup lang='ts'>
  const props = defineProps({
    placeholder:{
      type:String,
      default:'请输入您的账号或邮箱'
    },
    type:{
      type:String,
      default:'text'
    }
  })
</script>

<template>
  <input :type="props.type" :placeholder="props.placeholder" class="hd-input"/>
</template>
    
<style lang="scss" scoped>
  .hd-input {
  @apply w-full py-1.5 px-2 placeholder:text-sm border border-gray-500
            rounded-md outline-none outline-offset-0 focus:outline-violet-500 
            focus:outline-offset-1 duration-200 focus:border-white
}
</style>