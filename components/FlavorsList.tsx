'use client';
import { Catalog } from '@/db-types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export const FlavorsList = ({ data }: { data: Catalog['flavors'] }) => {
    const searchParams = useSearchParams();
    const currentFlavor = searchParams.get('flavor');
    const pathname = usePathname();
    if (!data) {
        return null;
    }
    return (
        <div className="flex gap-4">
            <Link
                className={cn(
                    'border border-green-600 p-3 flex items-center justify-center',
                    {
                        ['bg-green-700']: !currentFlavor,
                    },
                )}
                href={pathname}
            >
                All
            </Link>
            {data.map(({ id, name }) => (
                <Link
                    key={id}
                    href={`?flavor=${id}`}
                    className={cn(
                        'border border-green-600 p-3 flex items-center justify-center',
                        {
                            ['bg-green-700']: currentFlavor === id,
                        },
                    )}
                >
                    {name}
                </Link>
            ))}
        </div>
    );
};
