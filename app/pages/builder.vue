<script setup lang="ts">
const data = await queryCollection('builder').path(useRoute().path).first()
</script>

<template>
  <div v-if="data">
    <ContentRenderer :value="data" />
  </div>
</template>
