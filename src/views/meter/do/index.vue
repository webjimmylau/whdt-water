<script setup>
import { ref, onBeforeMount, onActivated } from 'vue'
import { useRoute } from 'vue-router'
import add from './add'
import edit from './edit'

let route = useRoute()

let id = ref('')

onBeforeMount(() => {
  id.value = route.query.id
})

onActivated(() => {
  id.value = route.query.id
})
</script>

<template>
  <edit v-if="id" :id="id" />
  <add v-else />
</template>
