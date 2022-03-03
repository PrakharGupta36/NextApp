import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
const NavLogo = () => {
  return (
    <div className='nav-logo'>
      <li>
        {" "}
        <Link href='/'>
          <SiNextdotjs className='logo' />
        </Link>
      </li>
    </div>
  );
};

export default NavLogo;
