<template>
  <div class="container mt-5">
    <div class="row">
      <ProductsGrid v-for="product in store.products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "../stores/products";
import ProductsGrid from "../components/ProductsGrid.vue";

const store = useProductsStore();
</script>