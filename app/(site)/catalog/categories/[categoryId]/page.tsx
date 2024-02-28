import { notFound } from 'next/navigation';
import { getCategoryById } from '../_data/categories';

export default async function Category({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  const category = await getCategoryById(categoryId);
  if (!category) {
    notFound();
  }

  return (
    <>
      <h1 className="text-lg font-bold">{category.title}</h1>
    </>
  );
}
