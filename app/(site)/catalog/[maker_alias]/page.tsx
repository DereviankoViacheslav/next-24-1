import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMakerByAlias } from '@/loaders/makers';
import { DrinksList } from '@/components/DrinksList';
import { getLemonadesByMakerId } from '@/loaders/drinks';

export default async function Maker({
    params: { maker_alias },
    searchParams: { _page, _per_page },
}: {
    params: { maker_alias: string };
    searchParams: { _page: string; _per_page: string };
}) {
    const maker = await getMakerByAlias(maker_alias);
    if (!maker) {
        notFound();
    }

    let page = parseInt(_page, 10);
    page = !page || page < 1 ? 1 : page;
    let perPage = parseInt(_per_page, 10);
    const res = await getLemonadesByMakerId(maker.id, {
        page,
        perPage,
    });
    const { first, last, items, pages, next, prev, data } = res;

    const navLinks: React.JSX.Element[] = [];

    for (let i = 0; i < pages; i++) {
        const pageNamber = i + 1;
        navLinks.push(
            <Link
                key={pageNamber}
                className={
                    page === pageNamber
                        ? 'bg-green-500 fw-bold px-2 rounded-md text-black'
                        : 'hover:bg-green-500 px-1 rounded-md'
                }
                href={`?_page=${pageNamber}&_per_page=${_per_page}`}
            >
                {pageNamber}
            </Link>,
        );
    }

    return (
        <>
            <h1 className="text-lg font-bold">{maker_alias}</h1>
            <DrinksList data={data} />
            {page > pages ? (
                <div>No more pages...</div>
            ) : (
                <div className="flex justify-center items-center mt-16">
                    <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green p-4">
                        {page === 1 ? (
                            <div className="opacity-60" aria-disabled="true">
                                Previous
                            </div>
                        ) : (
                            <Link
                                href={`?_page=${prev}&_per_page=${_per_page}`}
                                aria-label="Previous Page"
                            >
                                Previous
                            </Link>
                        )}

                        {navLinks.length > 0 && navLinks}

                        {page === pages ? (
                            <div className="opacity-60" aria-disabled="true">
                                Next
                            </div>
                        ) : (
                            <Link
                                href={`?_page=${next}&_per_page=${_per_page}`}
                                aria-label="Next Page"
                            >
                                Next
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
