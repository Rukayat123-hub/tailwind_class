// File: src/components/Buttons/Button.jsx
import React from 'react';
import './Button.css';

 
const Button = ({ variant = 'primary', size = 'medium', children }) => {
  const className = `button button-${variant} button-${size}`;
  return <button className={className}>{children}</button>;
};

export default Button;
