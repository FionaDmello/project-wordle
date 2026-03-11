import React, { useState } from 'react';

function InputForm() {
  const [guess, setGuess] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(guess.toUpperCase());
    setGuess('');
  };
  
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
          onChange={(e) => setGuess(e.target.value)} />
      </form>
    </div>
  ); 
}

export default InputForm;
