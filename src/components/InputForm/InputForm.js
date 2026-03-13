import React from 'react';
import Banner from "../Banner"

function InputForm({ guess, handleGuess, handleSubmit, bannerInfo }) {
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
          onChange={handleGuess}
          disabled={bannerInfo.status!==""}
        />
      </form>
      {bannerInfo.status !== "" && <Banner bannerInfo={bannerInfo} />}
    </div>
  ); 
}

export default InputForm;
