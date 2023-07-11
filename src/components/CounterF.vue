<script lang='ts' setup>
  import {useCounterStore} from "@/stores/counter"
  import {createPinia} from "pinia"
  const pinia = createPinia()
  const countStore = useCounterStore(pinia)
</script>

<template>
  <div class="cc">{{countStore.count}}</div>
</template>

<style lang='less' scoped>
  .cc{
    font-weight: bold;
    color: chartreuse;
    font-size: 24px;
  }
</style>
