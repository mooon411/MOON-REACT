import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import { GsapItem } from "./assets/js/GsapItem";

const App = () => {
  useEffect(() => {
    GsapItem();
  });

  return (
    <>
      <Header />
      <Main></Main>
    </>
  );
};

export default App;
