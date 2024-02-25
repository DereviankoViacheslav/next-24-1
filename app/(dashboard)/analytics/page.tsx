export default function Analytics() {
  const randonNumber = Math.floor(Math.random() * 2);

  if (randonNumber === 1) {
    throw new Error('Error from Analytics page');
  }

  return <main>Analytics</main>;
}
