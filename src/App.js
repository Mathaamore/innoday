import './App.css';
import World from './components/map';
import React, { useState } from 'react';

var end = Date.now()

function App() {
  const [held_directions, setheld_directions] = useState("no");

  /* Direction key state */
  const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
  }

  const keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
  }

    // for start
    document.addEventListener("keydown", (e) => {
      var dir = keys[e.which];
      if (dir && held_directions !== dir) {
        setheld_directions(dir)
      }
    })

  

// for build
  /* document.addEventListener("keydown", (e) => {
    var dir = keys[e.which];
    if (dir && Date.now() >= end) {
      setheld_directions("pause")
      setheld_directions(dir)
      end = Date.now() + 15;
    }
  }) */
  

  document.addEventListener("keyup", (e) => {
    setheld_directions("no")
  });

  return (
    <>
        <World dir={held_directions} />
    </>
  );
}

export default App;
