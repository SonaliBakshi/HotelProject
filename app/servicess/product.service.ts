import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: '1',  name: 'The Presidental Suite', price: 40000,photo:'22.jpg' },
            { id: '2',  name: 'The Suite', price: 20000 ,photo:'23.jpg'},
            { id: '3',  name: 'Junior Suite', price:15000 ,photo:'room6.jpg'},
            { id: '4',  name: 'Ono Champagne Cocktail', price: 10000 ,photo:'9.jpg'},
            { id: '5',  name: 'Martini on the Rock', price: 8200 ,photo:'10.jpg'},
            { id: '6',  name: 'Diamond Coctail', price: 4300 ,photo:'11.jpg'},
            { id: '7',  name: 'Sapphire Martini', price: 3000 ,photo:'12.jpg'},
            { id: '8',  name: 'Ritz-Paris Sidecar', price: 2670 ,photo:'13.jpg'},
            { id: '9',  name: 'Platinum Passion', price: 2300 ,photo:'14.jpg'},
            { id: '10', name: 'Original Mai Tai', price: 2100 ,photo:'17.jpg'},
            { id: '11', name: 'Macallan', price: 1670 ,photo:'18.jpg'},
            { id: '12', name: 'Wiston', price: 1530 ,photo:'19.jpg'},
            { id: '13', name: 'Ruby Rose', price: 1500 ,photo:'20.jpg'},
            { id: '14', name: 'Spa Service', price: 1000 ,photo:'16.jpg'},
            { id: '15', name: 'Baby Sitting', price: 500 ,photo:'7.jpg'}
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}