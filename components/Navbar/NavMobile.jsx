import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
const NavMobile = () => {
  const [showMe, setShowMe] = useState(true);

  return (
    <>
      <div
        className='nav-mobile'
        style={{
          display: showMe ? "flex" : "none",
        }}>
        <li>
          {" "}
          <AiOutlineMenu
            onClick={() => {
              setShowMe(!setShowMe);
            }}
            className='menu'
          />{" "}
        </li>
      </div>
      <div
        className='nav-mobile-open'
        style={{
          display: showMe ? "none" : "grid",
        }}>
        <div className='nav-mobile-open-1'>
          <li
            onClick={() => {
              setShowMe(!showMe);
            }}>
            <Link href='/'>
              <a> Home </a>
            </Link>
          </li>
          <li
            onClick={() => {
              setShowMe(!showMe);
            }}>
            <Link href='/about'>
              <a> About </a>
            </Link>
          </li>
          <li
            onClick={() => {
              setShowMe(!showMe);
            }}>
            <Link href='/list'>
              <a> Listing </a>
            </Link>
          </li>
        </div>
        <div className='nav-mobile-open-2'>
          <li
            onClick={() => {
              setShowMe(!showMe);
            }}>
            <AiOutlineClose style={{ cursor: "pointer" }} />
          </li>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
