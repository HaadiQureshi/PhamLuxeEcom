import { MAX_FETCH_COUNT } from '@/constant';
import { Design } from '@/interface';
import { shopifyClient, parseShopifyResponse } from 'lib/shopify';
import { LineItem, Product } from 'shopify-buy';
import { mockGetAllProducts } from './mockData/mockShopifyData';

export const getAllProducts = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => { resolve(mockGetAllProducts) });
  // const products = shopifyClient.product.fetchAll(MAX_FETCH_COUNT).then(parseShopifyResponse);
  // return products;
};

export const getAllContentFiles = (): Promise<Design[]> => {
  return new Promise((resolve, reject) => { 
    resolve([
      { id: '1', alt: 'Placeholder', height: 800, name: 'Design2', src: '/Phone1.jpg', width: 800 },
      { id: '2', alt: 'Placeholder', height: 800, name: 'Design4', src: '/Phone2.jpg', width: 800 },
      { id: '3', alt: 'Placeholder', height: 800, name: 'Design6', src: '/Phone3.png', width: 800 },
      { id: '4', alt: 'Placeholder', height: 800, name: 'Design7', src: '/Phone4.jpg', width: 800 },
    ]);
  });
}

export const checkout = (lineItems: LineItem[]) => {
  const checkoutInput = { lineItems: lineItems };

  // @ts-ignore
  shopifyClient.checkout.create(checkoutInput).then((checkout) => {
    // Do something with the checkout
    console.log('checkout: ', checkout);
  });
};
