import Link from "next/link";
import { useState } from "react";
import { SiNextdotjs } from "react-icons/si";

const NavLogo = () => {
  const [showMe, setShowMe] = useState(false);

  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <div className='nav-logo'>
      <li>
        <Link href='/'>
          <a>
            <SiNextdotjs className='logo' width={64} />
          </a>
        </Link>
      </li>
    </div>
  );
};

export default NavLogo;
