<template>
  <button
    type="submit"
    class="flex items-center gap-2 py-3.5 px-6 bg-linear-to-br from-purple-500 to-purple-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg disabled:opacity-50 transition-all duration-300"
    :style="{ fontWeight: 300, color: 'darkblue' }"
  >
    <span class="text-xl font-bold">+</span>
    Add Todo
  </button>
</template>
<script setup lang="ts"></script>
