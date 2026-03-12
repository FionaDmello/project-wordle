import React from "react";
import { range } from '../../utils';

function Guess({ row, guesses }) {
  const cols = range(5);
  return (
    <p key={row} class="guess">
      {cols.map((col) => (
        <span key={col} class="cell" id={col}>
          {guesses[row]?.guess?.split("")[col]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
