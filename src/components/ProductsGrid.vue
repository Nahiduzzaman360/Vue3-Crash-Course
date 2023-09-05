<script setup>
import { computed } from "vue";
import { useProductsStore } from "../stores/products";

const props = defineProps({
  product: Object,
});

const store = useProductsStore();

const checkCart = computed(() => {
  return store.cart.findIndex((item) => item.id == props.product.id);
});

function addToCart() {
  store.addCart(props.product);
}
function removefromCart(id) {
  store.removeCart(id);
}
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card">
      <div class="card-header">
        <router-link
          :to="{ name: 'product', params: { id: props.product.id } }"
        >
          <img :src="props.product.img" class="w-100" height="300" />
        </router-link>
      </div>
      <div class="card-body" style="height: 140px">
        <h5 class="card-title">{{ props.product.title }}</h5>
        <p>
          {{ props.product.body }}
        </p>
      </div>
      <div class="card-footer">
        <button
          class="btn btn-danger w-100"
          v-if="checkCart != -1"
          @click="removefromCart(props.product.id)"
        >
          Remove from cart
        </button>
        <button class="btn btn-primary w-100" @click="addToCart()" v-else>
          Add to cart ${{ props.product.price }}
        </button>
      </div>
    </div>
  </div>
</template>