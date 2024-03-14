import Image from 'next/image';
import { Catalog } from '@/db-types';
import Link from 'next/link';

export const MakersList = ({ data }: { data: Catalog['makers'] }) => {
    if (!data) {
        return null;
    }

    return (
        <div className="flex justify-around bg-teal-400">
            {data.map(({ id, alias, name, image }) => (
                <Link
                    key={id}
                    href={`/catalog/${alias}?_page=1&_per_page=4`}
                    className="flex flex-col items-center"
                >
                    <Image src={image} alt="" width={100} height={100} />
                    <span className="font-bold text-white uppercase">
                        {name}
                    </span>
                </Link>
            ))}
        </div>
    );
};
