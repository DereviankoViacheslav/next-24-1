import Link from 'next/link';
import { getMakers } from '@/loaders/makers';
import { MakersList } from '@/components/MakersList';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default async function Catalog() {
    const makers = await getMakers();

    return (
        <div>
            <h1 className="text-lg font-bold">Catalog page</h1>
            <MakersList data={makers} />
            <Link href="/catalog/addproduct" className="font-bold">
                Add product
            </Link>
        </div>
    );
}
