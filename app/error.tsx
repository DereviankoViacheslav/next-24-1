'use client';

export default function AppError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.log('AppError=' + error);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <h3>From App</h3>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
