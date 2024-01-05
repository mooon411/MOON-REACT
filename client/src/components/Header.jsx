import React from "react";
import { Link } from "react-router-dom";
import moonImage from "../assets/img/moon.svg";

const Header = () => {
  return (
    <>
      <header id="myHeader">
        <div id="logo">
          <Link to="#home">
            <img src={moonImage} alt="moon" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="#about">about</Link>
            </li>
            <li>
              <Link to="#port">port</Link>
            </li>
            <li>
              <Link to="#log">log</Link>
            </li>
            <li>
              <Link to="#info">info</Link>
            </li>
            <li>
              <Link to="#talk">Talk</Link>
            </li>
            <li>
              <Link to="#contact">contact</Link>
            </li>
          </ul>
        </nav>
        <div className="nav_btn">
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <span></span>
            <span></span>
            <span></span>
            <div className="m_nav">
              <ul>
                <li>
                  <Link to="#about">about</Link>
                </li>
                <li>
                  <Link to="#port">port</Link>
                </li>
                <li>
                  <Link to="#log">log</Link>
                </li>
                <li>
                  <Link to="#info">info</Link>
                </li>
                <li>
                  <Link to="#talk">Talk</Link>
                </li>
                <li>
                  <Link to="#contact">contact</Link>
                </li>
              </ul>
            </div>
          </label>
        </div>
      </header>
    </>
  );
};

export default Header;
