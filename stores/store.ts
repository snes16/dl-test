import { defineStore } from 'pinia';

export interface Product {
    id: number;
    title: string;
    type: 'Аукцион' | 'Прямая продажа';
    description: string;
    price: number;
    quantity: number;
    image: string;
}

export const useStore = defineStore('store', {
    state: () => ({
        products: [] as Product[],
        deals: [] as Product[],
        favorites: [] as Product[],
    }),
    actions: {
        addToDeals(product: Product) {
            if (!this.deals.find((p) => p.id === product.id)) {
                this.deals.push(product);
            }
        },
        addToFavorites(product: Product) {
            if (!this.favorites.find((p) => p.id === product.id)) {
                this.favorites.push(product);
            }
        },
    },
});
