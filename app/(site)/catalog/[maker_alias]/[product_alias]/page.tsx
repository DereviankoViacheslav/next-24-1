import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getLemonadeById } from '@/loaders/drinks';
import { getFlavorById } from '@/loaders/flavors';
import { getMakerById } from '@/loaders/makers';

type Product = {
    product_alias: string;
    title: string;
    description: string;
};

// export async function generateStaticParams() {
//     const data = await getAllProducts();
//     return data?.map(({ id }) => ({ product_alias: id })) as any[];
// }

export default async function Product({
    params: { product_alias },
}: {
    params: { product_alias: string };
}) {
    const product = await getLemonadeById(product_alias);
    if (!product) {
        notFound();
    }

    return (
        <div>
            <Image src={product.image} alt="" width={100} height={100} />
            <h1 className="text-lg font-bold">
                <div>{product.maker}</div>
                <div>{product.flavor}</div>
                ooooooo
            </h1>
        </div>
    );
}
