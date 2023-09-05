<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 mb-4">
                <img :src="product.img">
                <h5>${{ product.price }}</h5>
                <h4>{{ product.title }}</h4>
                <p>{{ product.body }}</p>
                <button class="btn btn-danger" v-if="checkCart != -1" @click="removefromCart(product.id)">Remove from cart</button>
                <button class="btn btn-primary" @click="addToCart" v-else>Add to cart</button>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { useProductsStore } from "../stores/products"

    const store = useProductsStore()
    const props = defineProps({
        id: String
    })
    const product = ref(store.products.find((item) => item.id == props.id))
    const checkCart = computed(()=>{
        return store.cart.findIndex((item) => item.id == props.id)
    })

    function addToCart(){
        store.addCart(product.value)
    }
    function removefromCart(id){
        store.removeCart(id)
    }
</script>