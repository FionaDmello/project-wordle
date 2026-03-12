import React from 'react';

function Guesses({ guesses }) {
  const visibleGuesses = guesses.length > 5 ? guesses.splice(0,6) : guesses;
 
  return (
    <div class="guess-results">
      {visibleGuesses.map(({ id, guess }) => {
        return (
          <p key={id} class="guess">
          {
            guess.split('').map((letter, idx) => <span class="cell" id={idx}>{letter}</span>)
          }
        </p>);
      })}
    </div>
  );
}

export default Guesses;
