import React from 'react';

function InputForm({ guess, handleGuess, handleSubmit }) {
  return (
    <div>
      <form class="guess-input-wrapper" onSubmit={handleSubmit}>
        <label
          htmlFor="guess-input"
        >
          Enter guess:
        </label>
        <input
          type="text"
          name="guess"
          id="guess-input"
          pattern=".{5}"
          value={guess}
          onChange={handleGuess} />
      </form>
    </div>
  ); 
}

export default InputForm;
