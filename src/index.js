import React from "react";
import { render } from "react-dom";
import Pet from "./components/Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Neko" animal="cat" breed="british" />
      <Pet name="Fibi" animal="cat" breed="mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
