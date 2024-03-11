import { Drink } from '@/app/_components/DrinksList';
import { FlavorEntity, LemonadeEntity, MakerEntity } from '@/db-types';

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
        `${process.env.API_BASE_PATH}/lemonade?${params.toString()}`,
    );
    const lemonades: LemonadeEntity[] = await resLemonades.json();
    const resFlavors = await fetch(`${process.env.API_BASE_PATH}/flavor`);
    const flavors: FlavorEntity[] = await resFlavors.json();
    const resMaker = await fetch(`${process.env.API_BASE_PATH}/maker/${id}`);
    const maker: MakerEntity = await resMaker.json();

    const result = lemonades.map(({ id, image, flavorId }) => {
        const flavor = flavors.find(({ id }) => id === flavorId)
            ?.name as string;

        const drink: Drink = {
            id,
            image,
            maker: maker.name,
            flavor,
        };
        return drink;
    });
    return result;
}

export async function getLemonadeById(
    id: string,
): Promise<LemonadeEntity | null> {
    const res = await fetch(`${process.env.API_BASE_PATH}/lemonade/${id}`);

    if (!res.ok) {
        return null;
    }

    return res.json();
}
