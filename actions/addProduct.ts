'use server';

export interface AddProductResult {
    status: boolean;
    message: string;
}

export default async function AddProduct(
    state: AddProductResult,
    formData: FormData,
): Promise<AddProductResult> {
    const data = {
        id: formData.get('id'),
        flavor: formData.get('flavor'),
        makerId: formData.get('makerId'),
        volumeId: formData.get('volumeId'),
    };

    console.log('data-->>', data);


    return {
        status: true,
        message: 'Added successfully!',
    };
}
