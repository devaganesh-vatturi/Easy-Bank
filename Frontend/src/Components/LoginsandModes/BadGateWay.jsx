import React from 'react'
import '../../Styles/BadGateWay.css'
import InHeader from './InHeader'
import { useNavigate } from 'react-router-dom';
import Footer from '../Landingpage/Footer';
export default function BadGateWay() {
     const navigate = useNavigate();
    const gohome=()=>{
    localStorage.removeItem('authToken'); // Example of clearing token
    sessionStorage.clear(); // Clear session data
    navigate('/', { replace: true });

    // Prevent navigating back to the previous page
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    }};
  return (
    <>
    <InHeader/>
   <div className='bad-div'>
    <p className='bad-head'>Bad Gateway</p>
    <p  className='bad-des'>You’ve reached this page by mistake or with an invalid link.</p>
     <p onClick={gohome} className='bad-ref'> Click here to go back to the home page.</p>
</div>
   <Footer/>
    </>
  )
}
