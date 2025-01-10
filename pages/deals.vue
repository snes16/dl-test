<template>
  <div>
    <h1>Сделки</h1>
    <div v-for="deal in store.deals" :key="deal.id">
      <p>{{ deal.title }}</p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../stores/store.ts';
const store = useStore();
</script>
