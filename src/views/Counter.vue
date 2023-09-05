<template>
    <h1 class="text-danger text-center mt-5">Counter</h1>
    <div class="container d-flex justify-content-center">
        <button class="btn btn-primary" @click="store.increment">+</button>
        <h1 class="px-3">{{store.count}}</h1>
        <button class="btn btn-danger" @click="store.decrement">-</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';

// import { ref } from "vue";

const store = useCounterStore();

// const number = ref(1);
// function increment(){
//     number.value++;
// }
// function decrement(){
//     if(this.number){
//         number.value--;
//     }
// }
</script>