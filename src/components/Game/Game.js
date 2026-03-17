import React, { useState, useEffect, useCallback } from "react";

import { sample } from "../../utils";
import { WORDS, KEYS } from "../../data";
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
  const [bannerInfo, setBannerInfo] = useState({ status: "", answer: answer, noOfGuesses: 0 });
  const [keys, setKeys] = useState(KEYS)

  const handleGuess = (e) => {
    const letter = e.target.value;
    const newGuess = guess + letter;
    
    const updatedKeys = [...keys]
    const ansArr = answer.split("")
    const rowAndLetterIdx = updatedKeys.map(row => row.findIndex(letterObj => letterObj.value === letter))
    const letterIdx = rowAndLetterIdx.find(idx => idx !== -1)
    const row = rowAndLetterIdx.findIndex(idx => idx === letterIdx)
    
    if (ansArr.includes(letter)) {
      if (ansArr[guess.length] === letter) {
        updatedKeys[row][letterIdx]["status"] = "correct"
      }
      else {
        updatedKeys[row][letterIdx]["status"] = "misplaced"
      }
    } else {
      updatedKeys[row][letterIdx]["status"] = "incorrect"
    }
   
    setKeys(updatedKeys)
    setGuess(newGuess);
  };
  
  const handleBannerStatus = useCallback((guess) => {
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
  },[guesses, bannerInfo])
  
  const handleSubmit = useCallback(() => {
    const newGuess = {
      guess: guess.toUpperCase(),
      id: crypto.randomUUID()
    }
    const newGuesses = [...guesses, newGuess]
    setGuesses(newGuesses)
    setGuess("");
    handleBannerStatus(guess);
  },[guess, guesses, handleBannerStatus]);
  
  useEffect(() => {
    if (guess.length === 5) {
      handleSubmit()
    }
  },[guess, handleSubmit])
    
  return (
    <>
      <Guesses guesses={guesses} answer={answer}  />
      <InputForm guess={guess} handleGuess={handleGuess} bannerInfo={bannerInfo} />
      <Keyboard keys={keys} handleGuess={handleGuess} />
    </>
  );
}

export default Game;
