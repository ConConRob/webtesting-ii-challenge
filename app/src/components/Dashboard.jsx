import React, { useState } from "react";

import Display from "./Display";

export default function Container() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  function strike() {
    if (strikes + 1 > 2) {
      reset();
    } else {
      setStrikes(strikes + 1);
    }
  }
  function ball() {
    if (balls + 1 > 3) {
      reset();
    } else {
      setBalls(balls + 1);
    }
  }
  function foul() {
    if (strikes + 1 <= 2) {
      setStrikes(strikes + 1);
    }
  }
  function reset() {
    setBalls(0);
    setStrikes(0);
  }
  return (
    <div>
      <Display balls={balls} strikes={strikes} />
      <button onClick={strike} data-testid="strike-button">
        Strike
      </button>
      <button onClick={ball} data-testid="ball-button">
        Ball
      </button>
      <button onClick={foul} data-testid="foul-button">
        Foul
      </button>
      <button onClick={reset} data-testid="hit-button">
        Hit
      </button>
    </div>
  );
}
