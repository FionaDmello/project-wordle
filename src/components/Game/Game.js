import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm/InputForm";
import Guesses from "../Guesses/Guesses";
import Keyboard from "../Keyboard/Keyboard"; 

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [bannerInfo, setBannerInfo] = useState({status: "", answer: answer, noOfGuesses: 0});

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
    handleBannerStatus(guess);
  };
  
  const handleBannerStatus = (guess) => {
    if (guess.toUpperCase() === answer) {
      const updatedBannerInfo = { ...bannerInfo }
      updatedBannerInfo["status"] = "happy"
      updatedBannerInfo["noOfGuesses"] = guesses.length + 1
      setBannerInfo(updatedBannerInfo)
    }
     else if (guesses.length === 5 && guess.toUpperCase() !== answer) {
      const updatedBannerInfo = { ...bannerInfo }
      updatedBannerInfo["status"] = "sad"
      setBannerInfo(updatedBannerInfo)
    }

    //setTimeout(resetBannerStatus, 1000)
  }
  
  /*
  NOTE: Could reset the banner after a few seconds, but then the input is enabled and the user can continue the game which should not happen
  const resetBannerStatus = () => {
    const resetBannerInfo = { ...bannerInfo }
    resetBannerInfo["status"] = ""
    resetBannerInfo["noOfGuesses"] = 0
    setBannerInfo(resetBannerInfo)
  }
  */
    
  return (
    <>
      <Guesses guesses={guesses} answer={answer}  />
      <InputForm guess={guess} handleGuess={handleGuess} handleSubmit={handleSubmit} bannerInfo={bannerInfo} />
      <Keyboard />
    </>
  );
}

export default Game;
