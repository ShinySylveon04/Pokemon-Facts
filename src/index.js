import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import species from "./utils/species.js";
import { Card } from "./components/Card.js";

function App() {
  let number = species.length - 1;
  return (
    <div
      className="App"
      style={{ backgroundColor: "#fafafa", padding: "10px" }}
    >
      <div
        style={{
          textAlign: "center",
          font:
            '1em/1.4 Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1.4rem",
          color: "rgb(41,73,130)"
        }}
      >
        <h1>#Pokemon Facts</h1>
      </div>
      {_.times(number, num => (
        <Card
          speciesName={species[num + 1]}
          speciesNum={_.padStart(num + 1, 3, "0")}
          tweetNum={num}
          key={num}
        />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
