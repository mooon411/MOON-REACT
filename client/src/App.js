import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import { smooth } from "./assets/js/smooth";
import { link } from "./assets/js/link";
import { ScrollHeader } from "./assets/js/scrollHeader";
import { reveal } from "./assets/js/reveal";
import { port } from "./assets/js/port";
import { log } from "./assets/js/log";

const App = () => {
  useEffect(() => {
    smooth();
    link();
    ScrollHeader();
    reveal();
    port();
    log();
  }, []);

  return (
    <>
      <Header />
      <Main></Main>
    </>
  );
};

export default App;
