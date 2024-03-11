import Link from 'next/link';

export default async function Blog() {
    return (
        <div>
            <h1 className="text-lg font-bold">Blog posts</h1>
            <div className="flex flex-col gap-2 mt-[20px]">
                <Link href="/blog/1">Post 1</Link>
                <Link href="/blog/2">Post 2</Link>
                <Link href="/blog/3">Post 3</Link>
            </div>
        </div>
    );
}
