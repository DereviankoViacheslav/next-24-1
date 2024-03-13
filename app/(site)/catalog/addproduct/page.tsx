import { getMakers } from '@/loaders/makers';
import { getVolumes } from '@/loaders/volumes';
import addProduct from "@/actions/addProduct";
import { ProductAddEditForm } from '@/components/ProductAddEditForm';

export default async function Catalog() {
    const makers = await getMakers();
    const volumes = await getVolumes();

    return (
        <div className="m-8">
            <h1 className="text-lg font-bold">Add product</h1>
            <ProductAddEditForm
                action={addProduct}
                makers={makers}
                volumes={volumes}
            />
        </div>
    );
}
