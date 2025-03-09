import React from 'react'
import Header from './Header';
import Footer from './Footer';
import '../Styles/Home.css'
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
      <div className='home-main'>
        <div className='hero-div' onClick={gocreateuser}>
          <div className='home-img img1'></div><p id="home-hero-btn">Create User</p>
        </div>
        <div className='hero-div' onClick={godeposit}>
          <div className='home-img img2'></div><p id="home-hero-btn">Deposit</p>
        </div>
        <div className='hero-div' onClick={gowithdraw}>
          <div className='home-img img3'></div><p id="home-hero-btn">Withdraw</p>
        </div>
        <div className='hero-div' onClick={gotransfer}>
          <div className='home-img img4'></div><p id="home-hero-btn">Transfer</p>
          </div>
        <div className='hero-div' onClick={gohistory}>
          <div className='home-img img5'></div><p id="home-hero-btn">History</p>
          </div>
        <div className='hero-div' onClick={godeleteuser}>
          <div className='home-img img6'></div><p id="home-hero-btn">Delete User</p>
          </div>

      </div>
      <Footer/>
    </div>
  )
}
