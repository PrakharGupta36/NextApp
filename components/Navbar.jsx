import { AiOutlineMenu } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 0.5) {
      setColorchange(true);
      console.log(window.scrollY);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <nav>
      <ul className={colorChange ? "nav-scroll" : "nav"}>
        <div className='nav-logo'>
          <li>
            {" "}
            <Link href='/'>
              <SiNextdotjs className='logo' />
            </Link>
          </li>
        </div>
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
            <Link href='/listing'>
              <a> Listing </a>
            </Link>
          </li>
        </div>
        <div className='nav-mobile'>
          <li>
            {" "}
            <AiOutlineMenu className='menu' />{" "}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
