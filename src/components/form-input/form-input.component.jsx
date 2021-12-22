import React from 'react';

import './form-input.style.scss';

const FomrInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`} // this a cool way to write a if else stament in JS
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FomrInput;
