export default function Category({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  return (
    <>
      <h1 className="text-lg font-bold">Category id = {categoryId}</h1>
    </>
  );
}
