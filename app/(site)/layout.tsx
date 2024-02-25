import Link from 'next/link';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const randonNumber = Math.floor(Math.random() * 2);

  // if (randonNumber === 1) {
  //   throw new Error('Error from HomeLayout');
  // }

  return (
    <>
      <nav className="flex gap-4 bg-sky-800 text-white p-5">
        <Link href="/" className="font-bold">
          Homepage
        </Link>
        <Link href="/signin">Sign in</Link>
        <Link href="/signup">Sign up</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/catalog">Products catalog</Link>
        <Link href="/analytics">Analytics</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/error">Error</Link>
      </nav>
      {children}
    </>
  );
}
