<template>
  <div>
    <h1>Избранное</h1>
    <div v-for="favorite in store.favorites" :key="favorite.id">
      <p>{{ favorite.title }}</p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../stores/store.ts';
const store = useStore();
</script>
