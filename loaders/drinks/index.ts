import { Drink } from '@/components/DrinksList';
import { LemonadesEntity, MakersEntity } from '@/db-types';

export async function getLemonadesByMakerId(
    id: string,
    filters?: {
        flavor?: string;
    },
): Promise<Drink[]> {
    const params = new URLSearchParams();
    params.set('makerId', id);
    if (filters?.flavor) {
        params.set('flavorId', filters.flavor);
    }
    const resLemonades = await fetch(
        `${process.env.API_BASE_PATH}/lemonades?_embed=flavor&${params.toString()}`,
    );

    const lemonades: (LemonadesEntity & {
        flavor: { id: string; name: string };
    })[] = await resLemonades.json();
    const resMaker = await fetch(`${process.env.API_BASE_PATH}/makers/${id}`);
    const maker: MakersEntity = await resMaker.json();

    const result = lemonades.map(({ id, image, flavor }) => {
        const drink: Drink = {
            id,
            image,
            maker: maker.name,
            flavor: flavor.name,
        };
        return drink;
    });
    return result;
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
