import React from 'react';
import '.././Styles/DialougeBox.css';
const DialougeBox = ({ children, onClose }) => {
  return (
    <div className="message-overlay">
      <div className="message-box">
        <div className="message-content">
          {children}
        </div>
        <button className="message-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DialougeBox;
