<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex gap-3 bg-white backdrop-blur-sm rounded-2xl p-6 shadow-sm"
  >
    <input
      v-model="newTodo"
      type="text"
      placeholder="Add new activity!"
      class="flex-1 py-3.5px-5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-all duration-300"
      maxlength="100"
    />
    <ButtonSubmit />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonSubmit from './shared/ButtonSubmit.vue'

const newTodo = ref('')
const emit = defineEmits<{
  (e: 'addTodo', title: string): void
}>()

const handleSubmit = () => {
  emit('addTodo', newTodo.value.trim())
  newTodo.value = ''
}
</script>

<style scoped>
.class {
  color: darkblue !important;
}
</style>
