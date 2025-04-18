import React from "react";

import Provider from "@/theme-context";
import "./styled.css";
import Home from "@/components/home/index";
const App = () => {
  return (
    <Provider>
      <Home />
    </Provider>
  );
};

export default App;
