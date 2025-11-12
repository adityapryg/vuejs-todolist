<template>
  <div class="max-w-[600px] my-8 mx-auto px-4">
    <ul class="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg">
      <TaskItem :isChecked="true"> True Komponen TaskItem </TaskItem>
      <TaskItem :isChecked="false"> False Komponen Task </TaskItem>
    </ul>
  </div>
</template>
<script setup lang="ts">
import TaskItem from './TaskItem.vue'
</script>
