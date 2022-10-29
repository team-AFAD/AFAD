import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content__logo}>
        <h2>navbar</h2>

        <nav className={classes.header__content__nav}>
          <ul>
            <li>
              <a href="/">pageOne</a>
            </li>
            <li>
              <a href="/">pageTwo</a>
            </li>
            <li>
              <a href="/">pageThree</a>
            </li>
          </ul>
          <button>CTA Page</button>
        </nav>
        <div className={classes.header__content__toggle}>
          <BiMenuAltRight />
        </div>
      </div>
    </header>
  );
};

export default Header;

// rafce 치면 바로 form이 생김.
