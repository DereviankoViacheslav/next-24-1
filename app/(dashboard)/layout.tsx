import Link from 'next/link';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex gap-4 bg-sky-800 text-white p-5">
        <Link href="/" className="font-bold">
          Homepage
        </Link>
        <Link href="/analytics">Analytics</Link>
        <Link href="/profile">Profile</Link>
      </nav>
      {children}
    </>
  );
}
