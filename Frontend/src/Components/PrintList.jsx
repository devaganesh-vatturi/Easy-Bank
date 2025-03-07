import React from 'react'
import '../Styles/PrintList.css'
export default function PrintList({accno,amount,balance,description,type,time}) {
  return (
    <div className='plist'>
      <div>
        <p className='plist-amount'>RS {amount}</p>
        <p className='plist-balance'>Balance: {balance}</p>
        </div>
       <div>
        <p>{description}</p>
        <p>{type}</p>
        <p>{time}</p>
        </div>
    </div>
  )
}
