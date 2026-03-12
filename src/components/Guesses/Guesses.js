import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from "../../game-helpers";

function Guesses({ guesses, answer }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED); 
  
  return (
    <div class="guess-results">
      {rows.map((row) => {
        const results = checkGuess(guesses[row]?.guess, answer)
        return <Guess key={row} row={row} results={results} />
      })}
    </div>
  );
}

export default Guesses;
