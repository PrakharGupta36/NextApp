import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
const NavLogo = () => {
  return (
    <div className='nav-logo'>
      <li>
        <Link href='/'>
          <a>
            <SiNextdotjs className="logo" width={64} />
          </a>
        </Link>
      </li>
    </div>
  );
};

export default NavLogo;
