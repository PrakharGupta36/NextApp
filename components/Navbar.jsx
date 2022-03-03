import React, { useEffect, useState } from "react";

import NavItems from "./Navbar/NavItems";
import NavLogo from "./Navbar/NavLogo";
import NavMobile from "./Navbar/NavMobile";
let matches, setMatches;

export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);

  if (process.browser) {
    [matches, setMatches] = useState(
      window.matchMedia("(min-width: 768px)").matches
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 0.75) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    });
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <nav>
      <ul className={colorChange ? "nav-scroll" : "nav"}>
        <NavLogo />
        {matches && <NavItems />}
        {!matches && <NavMobile />}
      </ul>
    </nav>
  );
}
