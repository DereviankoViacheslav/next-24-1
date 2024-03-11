import { Catalog, MakerEntity } from '@/db-types';

export async function getMakerById(id: string): Promise<MakerEntity | null> {
    const res = await fetch(`${process.env.API_BASE_PATH}/maker/${id}`);

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export async function getMakers(): Promise<Catalog['maker'] | null> {
    const res = await fetch(`${process.env.API_BASE_PATH}/maker`);

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export async function getMakerByAlias(
    alias: string,
): Promise<MakerEntity | null> {
    const res = await fetch(
        `${process.env.API_BASE_PATH}/maker?alias=${alias}`,
    );
    const make = await res.json();
    return make?.length ? make[0] : null;
}
