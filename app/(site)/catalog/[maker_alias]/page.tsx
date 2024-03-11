export default async function Maker({
    params: { maker_alias },
}: {
    params: { maker_alias: string };
}) {
    return (
        <>
            <h1 className="text-lg font-bold">{maker_alias}</h1>
        </>
    );
}
