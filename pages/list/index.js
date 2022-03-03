export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return { props: { list: data } };
}

const List = ({ list }) => {
  return (
    <div className='list'>
      {list.map((i, index) => {
        const { name, email } = i;
        return (
          <div className='card' key={index}>
            <h4> {name} </h4>
            <p> {email} </p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
