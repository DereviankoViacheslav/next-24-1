import { Catalog, FlavorsEntity } from '@/db-types';

export async function getFlavors(): Promise<Catalog['flavors'] | null> {
    const res = await fetch(`${process.env.API_BASE_PATH}/flavors`);

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export async function getFlavorById(
    id?: string | null,
): Promise<FlavorsEntity | null> {
    if (!id) {
        return null;
    }
    const res = await fetch(`${process.env.API_BASE_PATH}/flavors/${id}`);

    if (!res.ok) {
        return null;
    }

    return res.json();
}
