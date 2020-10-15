<template>
  <div id="app">
    <product-list-one :products="products"/>
    <product-list-two :products="products"/>
  </div>
</template>

<script>
import ProductListOne from '@/components/ProductListOne.vue';
import ProductListTwo from '@/components/ProductListTwo.vue';

export default {
  name: 'App',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  data() {
    return {
      products: [
        { name: 'Laptop',price: 20000 },
        { name: 'Mifi',price: 5000 },
        { name: 'Router',price: 10000 },
        { name: 'Zuku',price: 4000 },
      ],
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
