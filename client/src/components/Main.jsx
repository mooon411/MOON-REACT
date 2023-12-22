import React from "react";
import Home from "./section/Home";
import About from "./section/About";
import Port from "./section/Port";
import Log from "./section/Log";

const Main = () => {
  return (
    <>
      <main id="main" role="main">
        <Home />
        <About />
        <Port />
        <Log />
      </main>
    </>
  );
};

export default Main;
