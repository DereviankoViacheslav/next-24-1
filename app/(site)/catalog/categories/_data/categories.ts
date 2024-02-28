import { Category } from './type';

export const categories: Category[] = [
  {
    id: '1',
    title: 'Category 1',
  },
  {
    id: '2',
    title: 'Category 2',
  },
  {
    id: '3',
    title: 'Category 3',
  },
];

export function getCategoryById(
  categoryId: string,
): Promise<Category | undefined> {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(categories.find(({ id }) => id === categoryId));
    }, 1000);
  });
}

export function getAllCategories(): Promise<Category[] | undefined> {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(categories);
    }, 1000);
  });
}
