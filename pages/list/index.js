import Image from "next/image";

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return { props: { list: data } };
}

const List = ({ list }) => {
  let API = "https://robohash.org/";

  return (
    <div className='list'>
      {list.map((i, index) => {
        const { name, email } = i;
        return (
          <div className='card' key={index}>
            {/* <Image src={`${API}/${index}.png`} width={500} height={500} /> */}
            <h4> {name} </h4>
            <p> {email} </p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
