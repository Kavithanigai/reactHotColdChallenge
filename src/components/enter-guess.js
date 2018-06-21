import React from 'react';

const NumberInput = (props) =>{
  return (
    <div className="form-group">
           <label htmlFor={props.id}>{props.label}</label>
           <input type="number" id={props.id} min={props.min} max={props.max} onChange={props.onChange} value={props.value}/>
    </div>
  );
}

export default NumberInput;
