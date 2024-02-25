import Link from 'next/link';

export default function CategoryLayout({
  children,
  params: { categoryId },
}: Readonly<{
  children: React.ReactNode;
  params: { categoryId: string };
}>) {
  const path = `/catalog/categories/${categoryId}/products`;

  return (
    <main className="flex h-full">
      <nav className="flex flex-col gap-4 bg-sky-400 text-white p-5">
        <h1 className="text-lg font-bold">Category id = {categoryId}</h1>
        <Link href={`${path}/1`}>Products 1</Link>
        <Link href={`${path}/2`}>Products 2</Link>
        <Link href={`${path}/3`}>Products 3</Link>
      </nav>
      <section className="flex justify-center items-center grow">
        {children}
      </section>
    </main>
  );
}
