import React from 'react';

const GuessButton=(props) =>{
  return (
    <button type='submit' className='guessBtn' onClick={props.displayGuessResult}>Guess!</button>
  );
}

export default GuessButton;
