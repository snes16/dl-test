<template>
  <div class="product-card">
    <img :src="product.image" alt="product image" />
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <p>{{ product.price }} ₽</p>
    <p>Количество: {{ product.quantity }}</p>
    <button @click="$emit('addToDeals', product)">Добавить в сделки</button>
    <button @click="$emit('addToFavorites', product)">♥</button>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>
