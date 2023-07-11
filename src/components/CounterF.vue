<script lang='ts' setup>
  import {useCounterStore} from "@/stores/counter"
  const countStore = useCounterStore()
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
