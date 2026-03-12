import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm/InputForm";
import Guesses from "../Guesses/Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);

  const handleGuess = (e) => {
    setGuess(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newGuess = {
      guess: guess.toUpperCase(),
      id: crypto.randomUUID()
    }
    const newGuesses = [...guesses, newGuess]
    setGuesses(newGuesses)
    setGuess("");
  };
  
  
  return (
    <>
      <Guesses guesses={guesses} />
      <InputForm guess={guess} handleGuess={handleGuess} handleSubmit={handleSubmit} />
    </>
  );
}

export default Game;
