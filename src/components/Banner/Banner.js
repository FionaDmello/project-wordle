import React from 'react';

function Banner({ bannerInfo }) {
  const { status, answer, noOfGuesses } = bannerInfo
  
  return (
    <div class={`${status} banner`}>
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
    </div>);
}

export default Banner;
