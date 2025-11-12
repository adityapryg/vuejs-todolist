<template>
  <RouterLink to="/login">ke login</RouterLink>
  <div>
    <AppHeader />
    <ListItem />
  </div>
</template>
<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import ListItem from '@/components/ListItem.vue'
</script>
