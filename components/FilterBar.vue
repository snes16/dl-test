<template>
  <div class="filter-bar">
    <button
        v-for="type in ['Все типы', 'Прямая продажа', 'Аукцион']"
        :key="type"
        @click="$emit('changeFilter', type)"
        :class="{ active: type === selectedType }"
    >
      {{ type }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({ filterType: String });
const selectedType = ref('');
</script>
