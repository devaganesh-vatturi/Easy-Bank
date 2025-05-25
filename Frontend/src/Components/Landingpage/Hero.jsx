import React from 'react'
import '../../Styles/Hero.css'
export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-main'>
        <div className='hero-text'>
        <div className='hero-l1'><p className='hero-l1-start'>Seamless Banking for </p><p className='hero-l1-end'>You,</p></div>
        <div className='hero-l2'><p className='hero-l2-start'>Powered by</p><p className='hero-l2-end'>Us</p></div>
        <p className='hero-p'>Easy Bank is a dual-interface system where employees manage offline operations like deposits and user updates, while account holders access online services such as balance checks and fund transfers.</p>
        </div>
        <div className='hero-img'></div>
        </div>
    </div>
  )
}
