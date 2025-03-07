import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Home() {

  const gocreateuser=(e)=>{
    window.location.href='/createuser';
  }
  const godeleteuser=(e)=>{
    window.location.href='/deleteuser';
  }
  const godeposit=(e)=>{
    window.location.href='/deposit';
  }
  const gotransfer=(e)=>{
    window.location.href='/transfer';
  }
  const gowithdraw=(e)=>{
    window.location.href='/withdraw';
  }
  const gohistory=(e)=>{
    window.location.href='/history';
  }
  return (
    <div>
      <Header/>
      <p onClick={gocreateuser}>createuser</p>
      <p onClick={godeleteuser}>deleteuser</p>
      <p onClick={godeposit}>deposit</p>
      <p onClick={gotransfer}>transfer</p>
      <p onClick={gowithdraw}>withdraw</p>
      <p onClick={gohistory}>history</p>
      <Footer/>
    </div>
  )
}
