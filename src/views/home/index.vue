<script setup>
import { ref } from 'vue'

let inputValue = ref('')
let selectValue = ref('')
let selectOptions = [
  {
    label: 'Option1',
    value: '1'
  },
  {
    label: 'Option2',
    value: '2'
  },
  {
    label: 'Option3',
    value: '3'
  },
  {
    label: 'Option4',
    value: '4'
  }
]
let toggle = (val) => {
  console.log(val)
}
</script>

<template>
  <div class="p-16">
    <div class="l-h-2">home</div>
    <div class="m-t-8">
      <el-button>dark</el-button>
    </div>
    <div class="m-t-8">
      <el-input v-model="inputValue" />
    </div>
    <div class="m-t-8">
      <el-select v-model="selectValue" :options="selectOptions" placeholder="请选择">
        <el-option
          v-for="(item, index) in selectOptions"
          :key="index"
          :label="item.label"
          :value="item.value"
          @click="toggle(item.value)"
        />
      </el-select>
    </div>
    <div class="m-t-8 l-h-2">{{ selectValue }}</div>
  </div>
</template>

<style lang="less" module></style>
