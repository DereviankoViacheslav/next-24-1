import { notFound } from 'next/navigation';
import { getProductById, getAllProducts } from '../_data/products';

type Product = {
  productId: string;
  title: string;
  description: string;
};

export async function generateStaticParams() {
  const data = await getAllProducts();
  return data?.map(({ id }) => ({ productId: id })) as any[];
}

export default async function Product({
  params: { categoryId, productId },
}: {
  params: { categoryId: string; productId: string };
}) {
  const product = await getProductById(productId);
  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-lg font-bold">
        <div>{product.title}</div>
        <div>{product.description}</div>
      </h1>
    </div>
  );
}
