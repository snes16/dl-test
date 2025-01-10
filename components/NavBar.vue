<template>
  <nav class="navbar">
    <ul>
      <li>
        <NuxtLink to="/storage">Склад</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/deals">Сделки</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/favorites">Избранное</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  padding: 10px;
  display: flex;
  justify-content: center;
}
.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}
.navbar li {
  display: inline;
}
.navbar a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
.navbar a:hover {
  color: #1abc9c;
}
</style>
