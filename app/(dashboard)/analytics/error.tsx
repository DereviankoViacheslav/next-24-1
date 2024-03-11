'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <h3>From Analytics</h3>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
