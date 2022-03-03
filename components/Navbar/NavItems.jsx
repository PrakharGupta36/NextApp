import Link from "next/link";

const NavItems = () => {
  return (
    <div className='nav-items'>
      <li>
        <Link href='/'>
          <a> Home </a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a> About </a>
        </Link>
      </li>
      <li>
        <Link href='/list'>
          <a> Listing </a>
        </Link>
      </li>
    </div>
  );
};

export default NavItems;
