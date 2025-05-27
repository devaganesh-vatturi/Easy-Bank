import React from 'react';
import '../../Styles/Loading.css'
export default function Loading({data}) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">{data}</p>
    </div>
  );
}
