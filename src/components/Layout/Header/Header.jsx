import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import callIcon from "../../../assets/svg/call.svg"
import logo from "../../../assets/svg/logo.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.header_container}>
          <Link>
            <img src={logo} alt="" />
          </Link>

          <div>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>Services</Link>
              </li>
              <li>
                <Link to={"/"}>Pages</Link>
              </li>
              <li>
                <Link to={"/"}>Blog</Link>
              </li>
              <li>
                <Link to={"/"}>Contact</Link>
              </li>
            </ul>
            <Link><img src={callIcon} alt="" />+49 30 9846565</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
