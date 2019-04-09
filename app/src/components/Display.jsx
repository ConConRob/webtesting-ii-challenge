import React from "react";

export default function Display({ balls = 0, strikes = 0 }) {
  return (
    <div>
      <p>balls: {balls}</p>
      <p>strikes: {strikes}</p>
    </div>
  );
}
