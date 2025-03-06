import React from 'react'

export default function PrintList({accno,amount,balance,description,type,time}) {
  return (
    <div>
        <p>{accno}</p>
        <p>{amount}</p>
        <p>{balance}</p>
        <p>{description}</p>
        <p>{type}</p>
        <p>{time}</p>
    </div>
  )
}
