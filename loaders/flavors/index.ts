import { Catalog, FlavorEntity } from '@/db-types';

export async function getFlavors(): Promise<Catalog['flavor'] | null> {
    const res = await fetch(`${process.env.API_BASE_PATH}/flavor`);

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export async function getFlavorById(
    id?: string | null,
): Promise<FlavorEntity | null> {
    if (!id) {
        return null;
    }
    const res = await fetch(`${process.env.API_BASE_PATH}/flavor/${id}`);

    if (!res.ok) {
        return null;
    }

    return res.json();
}
