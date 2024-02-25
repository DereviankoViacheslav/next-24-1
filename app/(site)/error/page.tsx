export default function Error() {
  const randonNumber = Math.floor(Math.random() * 2);

  if (randonNumber === 1) {
    throw 'Error from Error page';
  }

  return <main>Error page</main>;
}
