import React from 'react'
import '../Styles/PrintList.css'
export default function PrintList({accno,amount,balance,description,type,time}) {
  return (
    <div className='plist'>
      <div className='plist-d1'>
        <p className='plist-amount'>₹ {amount}</p>
        <p className='plist-balance'>Balance: {balance}</p>
        </div>
       <div>
        <p className='plist-des'>{description}</p>
        <p className='plist-des'>{type}</p>
        <p className='plist-des'>{time}</p>
        </div>
    </div>
  )
}
