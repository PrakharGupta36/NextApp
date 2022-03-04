export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((i, index) => {
    return {
      params: { id: i.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(e) {
  const id = e.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { list: data },
  };
}

export default function Details({ list }) {
  const { name, email, website, address } = list;
  return (
    <div className='list-users'>
      <h1> {name} </h1>
      <p> {email} </p>
      <p> {website} </p>
      <p> {address.city} </p>
    </div>
  );
}
