<template>
  <label
    class="group flex items-center p-4 px-5 bg-white rounded-xl shadow-sm transition-all duration-200 cursor-pointer hover:shadow-md"
  >
    <input type="checkbox" :checked="isChecked" @change="emit('update')" class="hidden" />
    <span
      class="size-5 border-2 rounded-md me-3 relative transition-all duration-200 shrink-0 flex items-center justify-center"
      :class="
        isChecked
          ? 'bg-indigo-500 border-indigo-500 after:content-[\'\u2713\'] after:text-white after:text-xs after:font-bold'
          : 'border-gray-300 group-hover:border-indigo-400'
      "
    ></span>
    <span
      class="flex-1 text-start text-base transition-all duration-200"
      :class="isChecked ? 'line-through text-gray-400' : 'text-gray-700'"
    >
      <slot></slot>
    </span>
  </label>
</template>

<script setup lang="ts">
// options api
// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'TaskComponent',
//   props: {
//     isChecked: {
//       type: Boolean,
//       default: false,
//     },
//   },
// })

// composition api
defineProps<{
  isChecked?: boolean | false
}>()

const emit = defineEmits(['update'])
</script>
