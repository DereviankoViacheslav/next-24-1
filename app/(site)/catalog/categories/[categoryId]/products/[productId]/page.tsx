'use client';
export default function Product({
  params: { categoryId, productId },
}: {
  params: { categoryId: string; productId: string };
}) {
  return (
    <div>
      <h1 className="text-lg font-bold">
        <div>Product {productId}</div>
        <div>From category {categoryId}</div>
      </h1>
    </div>
  );
}
