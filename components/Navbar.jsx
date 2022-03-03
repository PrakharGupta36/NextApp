import React, { useEffect, useState } from "react";

import NavItems from "./Navbar/NavItems";
import NavLogo from "./Navbar/NavLogo";
import NavMobile from "./Navbar/NavMobile";

export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 0.75) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    });
  }, []);

  return (
    <nav>
      <ul className={colorChange ? "nav-scroll" : "nav"}>
        <NavLogo />
        <NavItems />
        <NavMobile />
      </ul>
    </nav>
  );
}
