<script setup>
import { ref } from "vue";

const lists = ref([]);
const input = ref("");

function addList(){
    if(this.input){
        lists.value.push(input.value)
        input.value = "";
    }
}
function removeList(index){
    lists.value.splice(index, 1)
}
</script>

<template>
  <div class="container">
    <h1 class="text-center text-primary mt-5">Todo List</h1>
    <div class="mb-4">
      <input type="text" class="form-control" v-model="input" @keyup.enter="addList()" />
    </div>
    
    <li v-for="(list, index) in lists" :key="index">{{ list }} <small style="cursor: pointer;" @click="removeList(index)">❌</small></li>
  </div>
</template>