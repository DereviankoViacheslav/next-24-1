export default function PostDetail({ params }: { params: { postId: string } }) {
    return (
        <>
            <h1 className="text-lg font-bold">Post id = {params?.postId}</h1>
        </>
    );
}
