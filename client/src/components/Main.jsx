import React from "react";
import Home from "./section/Home";
import About from "./section/About";
import Port from "./section/Port";
import Log from "./section/Log";
import Info from "./section/Info";
import Comments from "./comment/Comments";
import Contact from "./section/Contact";

const Main = () => {
  return (
    <>
      <main id="main" role="main">
        <Home />
        <About />
        <Port />
        <Log />
        <Info />
        <Comments />
        <Contact />
      </main>
    </>
  );
};

export default Main;
