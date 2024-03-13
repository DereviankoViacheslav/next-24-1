import { Catalog } from '@/db-types';

export async function getVolumes(): Promise<Catalog['volumes'] | null> {
    const res = await fetch(`${process.env.API_BASE_PATH}/volumes`);

    if (!res.ok) {
        return null;
    }

    return res.json();
}
