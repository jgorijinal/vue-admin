<script setup lang="ts">
import helper, {env} from '@/types/helper';

console.log(helper.env)
console.log(env)
</script>

<template>
<div>
  <div class="bg-red-500">1023</div>
  <router-view />
</div>
</template>

<style>

</style>
