import React from "react";
import moonImage from "../assets/img/moon.svg";

const Header = () => {
  return (
    <>
      <header id="myHeader">
        <div id="logo">
          <a href="#home">
            <img src={moonImage} alt="moon" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#port">port</a>
            </li>
            <li>
              <a href="#log">log</a>
            </li>
            <li>
              <a href="#info">info</a>
            </li>
            <li>
              <a href="#talk">Talk</a>
            </li>
            <li>
              <a href="#contact">contact</a>
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
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#port">port</a>
                </li>
                <li>
                  <a href="#log">log</a>
                </li>
                <li>
                  <a href="#info">info</a>
                </li>
                <li>
                  <a href="#talk">Talk</a>
                </li>
                <li>
                  <a href="#contact">contact</a>
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
