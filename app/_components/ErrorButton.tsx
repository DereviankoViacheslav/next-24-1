'use client';
import { useEffect, useState } from 'react';

export const ErrorButton = ({ message }: { message: string }) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      throw new Error(message);
    }
  }, [isError, message]);

  return (
    <button
      className="bg-red-600 text-white p-4"
      onClick={() => setIsError(true)}
    >
      Throw error
    </button>
  );
};
