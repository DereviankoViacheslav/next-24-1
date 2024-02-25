'use client';

export default function Profile() {
  const randonNumber = Math.floor(Math.random() * 2);

  if (randonNumber === 1) {
    throw new Error('Error from Profile page');
  }

  return (
    <main>
      <h1>Profile</h1>
      <button
        onClick={() => {
          throw new Error('Error from Profile page');
        }}
        className="p-2 rounded text-white bg-slate-700 hover:text-slate-900 hover:bg-slate-400"
      >
        Throw Error
      </button>
    </main>
  );
}
