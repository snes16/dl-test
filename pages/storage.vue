<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from '~/stores/store';

const store = useStore();
const searchQuery = ref('');
const filterType = ref('Все типы');

const products = ref([
  {
    id: 1,
    title: 'Пиломатериалы брус доска',
    type: 'Аукцион',
    description: 'Описание товара...',
    price: 11000,
    quantity: 3,
    image: '~/images/wood.svg',
  },
  {
    id: 2,
    title: 'Пиломатериалы сруб доска',
    type: 'Прямая продажа',
    description: 'Описание товара...',
    price: 11000,
    quantity: 3,
    image: '/images/wood.svg',
  },
]);

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());
    const matchesType =
        filterType.value === 'Все типы' || product.type === filterType.value;
    return matchesSearch && matchesType;
  });
});
</script>
<template>
  <div>
    <FilterBar
        :filterType="filterType"
        @changeFilter="(type) => (filterType = type)"
    />
    <input
        v-model="searchQuery"
        placeholder="Поиск..."
        class="search-bar"
    />
    <div class="product-grid">
      <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @addToDeals="store.addToDeals"
          @addToFavorites="store.addToFavorites"
      />
    </div>
  </div>
</template>
