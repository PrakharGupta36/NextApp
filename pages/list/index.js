import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return { props: { list: data } };
}

const List = ({ list }) => {
  return (
    <div className='list'>
      {list.map((i, index) => {
        const { name, email, id } = i;
        return (
          <Link key={index} href={`/list/${id}`}>
            <div className='card' key={index}>
              <h4> {name} </h4>
              <p> {email} </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default List;
