import React from 'react';
import { range } from "../../utils"

function Keyboard({ keys, handleGuess }) {
  const rows = range(3)
  
  return (
    <div class="keyboard-container">
      {
        rows.map((row, idx) => {
          return (
            <div class="keyboard-row" key={idx}>
              {
                keys.filter(key => key.row === row).map(key => <button key={key.value} value={key.value} class={`keyboard-key keyboard-key_${key.status}`} onClick={(e) => handleGuess(e)}>{key.value}</button>)
              }
            </div>
        )})
      }
    </div>
  ) 
}

export default Keyboard;
