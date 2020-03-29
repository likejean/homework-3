import React from 'react';

const Button = ({ setSubmit, inputs }) => <button data-testid="button" className="w3-btn w3-border w3-hover-blue" onClick={() => setSubmit(inputs)}>SUBMIT</button>
export default Button;