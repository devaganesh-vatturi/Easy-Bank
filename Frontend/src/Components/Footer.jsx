import React from 'react'
import '../Styles/Footer.css'
export default function Footer() {
  const godeva=(e)=>{
    window.open("https://devaganeshvatturi.vercel.app", "_blank")
  }
  return (
    <div className='footer'>
      <p className='foot-text' onClick={godeva}>All rights reserved @devaganeshvatturi</p>
      </div>
  )
}
