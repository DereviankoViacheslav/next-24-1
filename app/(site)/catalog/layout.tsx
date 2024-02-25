import Link from 'next/link';

export default function CatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex justify-center items-center gap-4 bg-sky-600 text-white p-5">
        <h1 className="text-lg font-bold">Categories:</h1>
        <Link href="/catalog/categories/1">Category 1</Link>
        <Link href="/catalog/categories/2">Category 2</Link>
        <Link href="/catalog/categories/3">Category 3</Link>
      </nav>
      {children}
    </>
  );
}
