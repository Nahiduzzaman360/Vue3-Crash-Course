import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore('products', () => {
    const products = ref([
        {
            "id": 1,
            "title": "iPhone 9",
            "body": "An apple mobile which is nothing like apple",
            "price": 549,
            "img": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        },
        {
            "id": 2,
            "title": "iPhone X",
            "body": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "img": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "body": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "img": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "body": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "img": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "body": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "img": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        },
        {
            "id": 6,
            "title": "MacBook Pro",
            "body": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "img": "https://i.dummyjson.com/data/products/6/thumbnail.png",
        },
        {
            "id": 7,
            "title": "Samsung Galaxy Book",
            "body": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "img": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
        },
        {
            "id": 8,
            "title": "Microsoft Surface Laptop 4",
            "body": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "img": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        },
        {
            "id": 9,
            "title": "Infinix INBOOK",
            "body": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "price": 1099,
            "img": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
        },
        {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "body": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "img": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
        },
        {
            "id": 11,
            "title": "perfume Oil",
            "body": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
            "price": 13,
            "img": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
        },
        {
            "id": 12,
            "title": "Brown Perfume",
            "body": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
            "price": 40,
            "img": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
        },
        {
            "id": 13,
            "title": "Fog Scent Xpressio Perfume",
            "body": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
            "price": 13,
            "img": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
        },
        {
            "id": 14,
            "title": "Non-Alcoholic Concentrated Perfume Oil",
            "body": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
            "price": 120,
            "img": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
        },
        {
            "id": 15,
            "title": "Eau De Perfume Spray",
            "body": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
            "price": 30,
            "img": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
        },
    ])

    const cart = ref([])

    function addCart(product){
        cart.value.push(product)
    }
    function removeCart(id){
        cart.value.splice(cart.value.findIndex((item) => item.id == id), 1)
    }

    return {products, cart, addCart, removeCart}
})