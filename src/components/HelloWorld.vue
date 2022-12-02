<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <div :class="$style['text']">less</div>
</template>

<style lang="less" module>
.text {
  padding: 10px;
  color: red;
  background: @colorBlue;
}
</style>
