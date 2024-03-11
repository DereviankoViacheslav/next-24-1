import { notFound } from 'next/navigation';
import { getMakerByAlias } from '@/loaders/makers';
import { Drink, DrinksList } from '@/app/_components/DrinksList';
import { getLemonadesByMakerId } from '@/loaders/drinks';

export default async function HomeLayout({
    children,
    params: { maker_alias },
}: Readonly<{
    children: React.ReactNode;
    params: { maker_alias: string };
}>) {
    const maker = await getMakerByAlias(maker_alias);
    if (!maker) {
        notFound();
    }

    const drinks = await getLemonadesByMakerId(maker.id);

    return (
        <>
            <DrinksList data={drinks} />
            {children}
        </>
    );
}
