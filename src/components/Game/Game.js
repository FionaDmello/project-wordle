import React, { useState, useEffect, useCallback } from "react";
import { sample } from "../../utils";
import { WORDS, KEYS } from "../../data";
import InputForm from "../InputForm/InputForm";
import Guesses from "../Guesses/Guesses";
import Keyboard from "../Keyboard/Keyboard"; 

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [bannerInfo, setBannerInfo] = useState({ status: "", answer: answer, noOfGuesses: 0 });
  const [keys, setKeys] = useState(KEYS)

  console.log(answer)
  const handleGuess = (e) => {
    const letter = e.target.value;
    const newGuess = guess + letter;
    
    const updatedKeys = [...keys]
    const ansArr = answer.split("")
    const letterIdx = updatedKeys.findIndex(letterObj => letterObj.value === letter)
    
    if (ansArr.includes(letter)) {
      if (ansArr[guess.length] === letter) {
        updatedKeys[letterIdx]["status"] = "correct"
      }
      else {
        updatedKeys[letterIdx]["status"] = "misplaced"
      }
    } else {
      updatedKeys[letterIdx]["status"] = "incorrect"
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
  },[guesses, bannerInfo, answer])
  
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
  }, [guess, handleSubmit])
  
  const resetGame = () => {
    setAnswer(sample(WORDS))
    setGuesses([])
    setGuess("")
    setBannerInfo({ status: "", answer: answer, noOfGuesses: 0 })
    setKeys(KEYS)
  }
    
  return (
    <>
      <Guesses guesses={guesses} answer={answer}  />
      <InputForm guess={guess} handleGuess={handleGuess} bannerInfo={bannerInfo} resetGame={resetGame} />
      <Keyboard keys={keys} handleGuess={handleGuess} />
    </>
  );
}

export default Game;
