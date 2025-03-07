import React from 'react'
import '../Styles/Header.css';
export default function Header() {

  const gomain=(e)=>{
    window.location.href='/';
  }
  return (
    <div className='header'>
      <p className='head-text' onClick={gomain}>Core Banker</p>
    </div>
  )
}
