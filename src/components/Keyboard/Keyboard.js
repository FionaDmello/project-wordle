import React from 'react';

function Keyboard({ keys, handleGuess }) {
  return (
    <div class="keyboard-container">
      {
        keys.map((row, idx) => {
          return (
            <div class="keyboard-row" key={idx}>
              {
                row.map(key => <button key={key.value} value={key.value} class={`keyboard-key keyboard-key_${key.status}`} onClick={(e) => handleGuess(e)}>{key.value}</button>)
              }
            </div>
        )})
      }
    </div>
  ) 
}

export default Keyboard;
