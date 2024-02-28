import { Product } from './type';

export const products: Product[] = [
  {
    id: '1',
    title: 'Product 1',
    description: 'Product 1 description',
  },
  {
    id: '2',
    title: 'Category 2',
    description: 'Product 2 description',
  },
  {
    id: '3',
    title: 'Category 3',
    description: 'Product 3 description',
  },
];

export function getProductById(
  productId: string,
): Promise<Product | undefined> {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(products.find(({ id }) => id === productId));
    }, 1000);
  });
}

export function getAllProducts(): Promise<Product[] | undefined> {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(products);
    }, 1000);
  });
}
