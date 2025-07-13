import React,{useState, useEffect} from 'react'
import InHeader from './InHeader';
import Loading from '../Operations/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../Styles/AccHolderInterface.css'
import Login from '../Landingpage/Login';
import axios from 'axios';
export default function AccHolderInterface() {
  const location=useLocation();
  const qp=new URLSearchParams(location.search);
  const info =qp.get('info');
  const accno= atob(info);
  const[isLoading,setLoading]=useState(false);
   const navigate = useNavigate();
  const [token,setToken]=useState(null);
  const gotransfer=(e)=>{
    window.location.href=`/transfer?accno=${accno}`;
  }
  const gohistory=(e)=>{
    window.location.href=`/history?accno=${accno}`;
  }
  const gobalance=(e)=>{
     window.location.href=`/checkbalance?accno=${accno}`;
  }
  const goself=(e)=>{
    window.location.href=`/selfdetails?accno=${accno}`;
  }
  const [status, setStatus] = useState(false);
     useEffect(() => {
      const qp = new URLSearchParams(location.search);
      const t = qp.get('token');
      setToken(t);
    }, [location.search]);

      useEffect(() => {
   setLoading(true);
    const verifyToken = async () => {
      if (!token) {
        setStatus(false);
        // navigate('/employeelogin');
        return;
      }
    try {
        const res = await axios.get(`https://easybank-qgjy.onrender.com/bank/validatejwt?token=${token}`);
        if (res.data.success) {
          setStatus(true);
        } else {
          setStatus(false);
        }
      
      } catch (err) {
        console.error(err);
        setStatus(false);
      }
      finally{
        setLoading(false);
      }
    };

    verifyToken();
  }, [token, navigate]);
  if(!status) return "Bad GateWay";
  return (
    <div className='accin'>
      <InHeader/>
        <center className='accin-h1'>Account Holder Dashboard</center>
      <div className='accin-main'>
        <div className='accin-div' onClick={gotransfer}>
           <div id="accin-hero">
            <p className='accin-hero-t1'>Transfer</p>
            <p className='accin-hero-t2'>To transfer amount from one user to another</p>
            </div><div className='accin-img aimg4'></div>
          </div>
        <div className='accin-div' onClick={gohistory}>
           <div id="accin-hero">
            <p className='accin-hero-t1'>History</p>
            <p className='accin-hero-t2'>To print the user bank statement in pdf</p>
            </div><div className='accin-img aimg5'></div>
          </div>
        <div className='accin-div' onClick={gobalance}>
          <div id="accin-hero">
            <p className='accin-hero-t1'>Balance Enquire</p>
            <p className='accin-hero-t2'>To check balance of a user</p>
            </div> <div className='accin-img aimg6'></div>
          </div>
            <div className='accin-div' onClick={goself}>
          <div id="accin-hero">
            <p className='accin-hero-t1'>Self Details</p>
            <p className='accin-hero-t2'>To check complete details of user</p>
            </div> <div className='accin-img aimg1'></div>
          </div>

      </div>
       {
                 isLoading && <Loading data={"Fetching Details....."}/>
                      } 
      </div>
  )
}