import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guesses({ guesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);
  
  
  return (
    <div class="guess-results">
      {rows.map((row) => 
      <Guess key={row} row={row} guesses={guesses} />
      )}
    </div>
  );
}

export default Guesses;
