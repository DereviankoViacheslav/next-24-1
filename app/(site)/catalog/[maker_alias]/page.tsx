import { notFound } from 'next/navigation';
import { getMakerByAlias } from '@/loaders/makers';
import { DrinksList } from '@/components/DrinksList';
import { getLemonadesByMakerId } from '@/loaders/drinks';

export default async function Maker({
    params: { maker_alias },
}: {
    params: { maker_alias: string };
}) {
    const maker = await getMakerByAlias(maker_alias);
    if (!maker) {
        notFound();
    }

    const drinks = await getLemonadesByMakerId(maker.id);

    return (
        <>
            <h1 className="text-lg font-bold">{maker_alias}</h1>
            <DrinksList data={drinks} />
        </>
    );
}
