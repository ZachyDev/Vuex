import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { name: 'Laptop',price: 20000 },
            { name: 'Mifi',price: 5000 },
            { name: 'Router',price: 10000 },
            { name: 'Zuku',price: 4000 },
          ]
    },
    getters: {
        saleProducts: state => {
            const saleProducts = state.products.map(product => {
                return {
                    name: '(' + product.name + ')',
                    price: product.price / 2
                }
            })
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: state => {
            state.products.forEach(product => {
                product.price -= 10
            })
        }
    }
})