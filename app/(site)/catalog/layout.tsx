import { getMakers } from '@/loaders/makers';
import { MakersList } from '@/app/_components/MakersList';

export default async function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const makers = await getMakers();

    return (
        <>
            <MakersList data={makers} />
            {children}
        </>
    );
}
