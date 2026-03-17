import React from 'react';

function Banner({ bannerInfo, resetGame }) {
  const { status, answer, noOfGuesses } = bannerInfo
  
  return (
    <div className={`${status} banner`}>
      <p>
        {
          status === "happy" ?
            <>
              <strong>Congratulations!</strong> Got it in <strong>{ noOfGuesses } guesses</strong>.
            </>
            :
            <>
                Sorry, the correct answer is <strong>{ answer.toUpperCase() }</strong>
            </>     
        }
      </p>
      <button onClick={resetGame}>Restart Game</button>
    </div>);
}

export default Banner;
