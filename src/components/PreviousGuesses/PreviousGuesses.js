import React from 'react';

function PreviousGuesses({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map(({ id, guess }) => (
        <p key={id} class="guess">{guess}</p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
