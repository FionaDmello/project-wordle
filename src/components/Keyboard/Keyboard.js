import React from 'react';
import { KEYS } from "../../data";

function Keyboard() {
  return (
    <div class="keyboard-container">
      {
        KEYS.map((row, idx) => {
          return (
            <div class="keyboard-row" key={idx}>
              {
                row.map(key => <button key={key} class="keyboard-key keyboard-key_neutral">{key}</button>)
              }
            </div>
        )})
      }
    </div>
  ) 
}

export default Keyboard;
