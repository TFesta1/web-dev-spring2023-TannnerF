/*

*/

import type { DataEnvelope, DataListEnvelope } from './myFetch';
import { api } from './session';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export function getProducts(): Promise<DataListEnvelope<Product[]>> {
    return api('products')
}

export function getProduct(id: number): Promise<DataEnvelope<Product>> {
    return api(`products/${id}`)
}


// Path: client\src\model\products.ts
// Compare this snippet from client\src\model\myFetch.ts:
//
// Default export
