'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export type Drink = {
    id: string;
    flavor: string;
    maker: string;
    image: string;
};

export const DrinksList = ({ data }: { data: Drink[] }) => {
    const pathname = usePathname();
    if (!data) {
        return null;
    }

    return (
        <div className="flex gap-4">
            {data.map(({ id, image, flavor, maker }) => (
                <Link
                    key={id}
                    href={`${pathname}/${id}`}
                    className=""
                >
                    <Image src={image} alt="" width={100} height={100} />
                    <p>{flavor}</p>
                    <p>{maker}</p>
                </Link>
            ))}
        </div>
    );
};
