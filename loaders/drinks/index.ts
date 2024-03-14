import { Drink } from '@/components/DrinksList';
import { FlavorsEntity, LemonadesEntity, MakersEntity } from '@/db-types';

export type Data = LemonadesEntity & { flavor: FlavorsEntity; maker: MakersEntity };

type ResponseDataLemonades = {
    data: Data[];
    first: number;
    prev: number | null;
    next: number | null;
    last: number | null;
    pages: number;
    items: number;
};

export async function getLemonadesByMakerId(
    id: string,
    filters?: {
        flavor?: string;
        page?: number;
        perPage?: number;
    },
): Promise<ResponseDataLemonades> {
    const params = new URLSearchParams();
    params.set('makerId', id);
    if (filters?.flavor) {
        params.set('flavorId', filters.flavor);
    }
    if (filters?.page && filters?.perPage) {
        params.set('_page', filters.page?.toString());
        params.set('_per_page', filters.perPage?.toString());
    } else {
        params.set('_page', '1');
        params.set('_per_page', '4');
    }

    const res = await fetch(
        `${process.env.API_BASE_PATH}/lemonades?_embed=flavor&_embed=maker&${params.toString()}`,
    );

    const resJSON: ResponseDataLemonades = await res.json();

    return resJSON;
}

export async function getLemonadeById(id: string): Promise<Drink | null> {
    const res = await fetch(
        `${process.env.API_BASE_PATH}/lemonades/${id}?_embed=flavor`,
    );

    if (!res.ok) {
        return null;
    }

    const lemonade: LemonadesEntity & {
        flavor: { id: string; name: string };
    } = await res.json();

    const resMaker = await fetch(
        `${process.env.API_BASE_PATH}/makers/${lemonade.makerId}`,
    );

    if (!resMaker.ok) {
        return null;
    }

    const maker: MakersEntity = await resMaker.json();

    const drink: Drink = {
        id: lemonade.id,
        image: lemonade.image,
        maker: maker.name,
        flavor: lemonade.flavor.name,
    };

    return drink;
}
