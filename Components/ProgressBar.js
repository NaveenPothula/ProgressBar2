import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percent ,actualValue}) => {
   
  return (
    <div className="progress-container"
    style= {{background:`conic-gradient(
      #4d5bf9 ${percent*3.6}deg,
      #cadcff ${percent*3.6}deg  
  )`}}
    
    >
      <div className="progress"></div>
      <div className='value'>{actualValue}</div>
    </div>
  );
};

export default ProgressBar;
