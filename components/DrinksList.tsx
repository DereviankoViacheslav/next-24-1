'use client';
import { Data } from '@/loaders/drinks';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export type Drink = {
    id: string;
    flavor: string;
    maker: string;
    image: string;
};

export const DrinksList = ({ data }: { data: Data[] }) => {
    const pathname = usePathname();
    if (!data) {
        return null;
    }

    return (
        <div className="flex gap-4">
            {data.map(({ id, flavor, image, maker }) => (
                <Link key={id} href={`/${id}`} className="">
                    <Image src={image} alt="" width={100} height={100} />
                    <p>{flavor.name}</p>
                    <p>{maker.name}</p>
                </Link>
            ))}
        </div>
    );
};
