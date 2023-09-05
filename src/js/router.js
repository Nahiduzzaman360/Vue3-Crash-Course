
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Counter from '../views/Counter.vue'
import Todo from '../views/Todo.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/counter', component: Counter },
    { path: '/todo', component: Todo },
    { path: '/products', component: Products },
    { path: '/product/:id', name: 'product' ,component: Product, props: true },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;