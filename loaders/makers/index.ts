import { Catalog, MakersEntity } from '@/db-types';

export async function getMakerById(id: string): Promise<MakersEntity | null> {
    const res = await fetch(`${process.env.API_BASE_PATH}/makers/${id}`);

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export async function getMakers(): Promise<Catalog['makers'] | null> {
    const res = await fetch(`${process.env.API_BASE_PATH}/makers`);

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export async function getMakerByAlias(
    alias: string,
): Promise<MakersEntity | null> {
    const res = await fetch(
        `${process.env.API_BASE_PATH}/makers?alias=${alias}`,
    );
    const make = await res.json();
    return make?.length ? make[0] : null;
}
