import React from "react";
import { range } from '../../utils';

function Guess({ row, results }) {
  const cols = range(5);

  const getStatusAndLetter = (col) => {
    let status = ""
    let letter = ""
    if (results !== null) {
      status = results[col]?.status 
      letter = results[col]?.letter 
    }
    return { letter, status }
  }
  
  return (
    <p key={row} class="guess">
      {cols.map((col) => {
        const {letter, status} = getStatusAndLetter(col)
        return (
          <span key={col} class={`cell ${status}`} id={col}>
            {letter}
          </span>
        )
      })}
    </p>
  );
}

export default Guess;
