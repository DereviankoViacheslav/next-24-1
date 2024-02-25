import Link from 'next/link';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex gap-4 bg-slate-900 text-white p-5">
        <Link href="/" className="font-bold">
          Homepage
        </Link>
      </nav>
      {children}
    </>
  );
}
