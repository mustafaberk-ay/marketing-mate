import React from 'react';
import '../App.css'; // Make sure to create this CSS file

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className='text-white font-bold'>Loading, please wait...</p>
    </div>
  );
};

export default LoadingScreen;
