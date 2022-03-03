import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title> NextApp </title>
        <meta />
      </Head>
      <main>
        <section className='home-page'>
          <h1> Hello, people </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            maiores reprehenderit dicta aperiam quo cumque voluptatem debitis
            nobis sed vitae, illo tenetur ea! Deserunt, labore! Optio
            voluptatibus quisquam repellat saepe.
          </p>
          <button className='home-page-link'>
            <Link href={"/list"}> List </Link>
          </button>
        </section>
      </main>
    </>
  );
}
