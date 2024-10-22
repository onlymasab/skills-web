"use client";

import React, { useState } from 'react';


// Define the prop types for the Button component
interface ButtonProps {
  label: string;                      // The label for the button
  backgroundColor?: string;          // Optional background color for the button
  textColor?: string;                // Optional text color for the button
  size?: 'small' | 'medium' | 'large'; // Optional size prop for button
  onClick?: () => void;              // Optional click event handler
  icon?: React.ReactNode;            // Optional icon to render in the button
}

const Button : React.FC<ButtonProps>  = ({ label, backgroundColor, textColor, size, onClick , icon})  => {

 


  return (
    <button onClick={onClick} className="bg-primary-redOrange py-2.5 px-5 text-white rounded text-base">{label}</button>
  )
}


export default Button;