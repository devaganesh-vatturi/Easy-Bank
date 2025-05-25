import React from 'react'
import ServiceSlide from './ServiceSlide'
import '../../Styles/Services.css'
import OperationSlide from './OperationSlide'
export default function Services() {
  return (
    <div className='service-main'>
      <center className='service-main-txt'>Services & Operations</center>
      <div className='service-user'>
        <center className='service-ser-txt'>Services Provided For Account Holder</center>
     <ServiceSlide/>
      </div>
      <div className='service-emp'>
      <center className='service-emp-txt'>Operations Employees can do</center>
      <OperationSlide/>
      </div>
    </div>
  )
}
