import React from 'react';

const OutputGuess = (props) =>{
  return (
    <div className="form-group">
        <h2 id='result' aria-live="assertive">
        {props.value}
        </h2>
    </div>
  );
}

export default OutputGuess;
