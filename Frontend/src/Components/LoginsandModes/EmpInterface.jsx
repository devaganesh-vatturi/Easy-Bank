import React,{useState,useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Operations/Loading';
import '../../Styles/EmpInterface.css';
import InHeader from './InHeader'
import BadGateWay from './BadGateWay';
export default function EmpInterface() {
  const [token,setToken]=useState(null);
  const location=useLocation();
  const[isLoading,setLoading]=useState(false);
    const navigate = useNavigate();  
 const [status, setStatus] = useState(false);
   useEffect(() => {
    const qp = new URLSearchParams(location.search);
    const t = qp.get('token');
    setToken(t);
  }, [location.search]);
 useEffect(() => {
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = () => {
    window.history.go(1); // user can't go back
  };
}, []);
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
   const gocreateuser=(e)=>{
    window.location.href=`/empoperations?filter=createuser&token=${token}`;
  }
  const goBalance=(e)=>{
    window.location.href=`/empoperations?filter=balance&token=${token}`;
  }
  const godeposit=(e)=>{
    window.location.href=`/empoperations?filter=deposit&token=${token}`;
  }
  const gotransfer=(e)=>{
    window.location.href=`/empoperations?filter=transfer&token=${token}`;
  }
  const gowithdraw=(e)=>{
    window.location.href=`/empoperations?filter=withdraw&token=${token}`;
  }
  const gohistory=(e)=>{
    window.location.href=`/empoperations?filter=history&token=${token}`;
  }
  if(!status) return <BadGateWay/>;
  return (
    <div className='empin'>
      <InHeader/>
        <center className='empin-h1'>Employee Dashboard</center>
      <div className='empin-main'>
        <div className='empin-div' onClick={gocreateuser}>
          <div id="empin-hero">
            <p className='empin-hero-t1'>Add User</p>
            <p className='empin-hero-t2'>To create a new user</p>
            </div><div className='empin-img img1'></div>
        </div>
        <div className='empin-div' onClick={godeposit}>
           <div id="empin-hero">
            <p className='empin-hero-t1'>Deposit</p>
            <p className='empin-hero-t2'>To cresit amount in a user account</p>
            </div><div className='empin-img img2'></div>
        </div>
        <div className='empin-div' onClick={gowithdraw}>
           <div id="empin-hero">
            <p className='empin-hero-t1'>Withdraw</p>
            <p className='empin-hero-t2'>To debit amount in a user account</p>
            </div><div className='empin-img img3'></div>
        </div>
        <div className='empin-div' onClick={gotransfer}>
           <div id="empin-hero">
            <p className='empin-hero-t1'>Transfer</p>
            <p className='empin-hero-t2'>To transfer amount from one user to another</p>
            </div><div className='empin-img img4'></div>
          </div>
        <div className='empin-div' onClick={gohistory}>
           <div id="empin-hero">
            <p className='empin-hero-t1'>History</p>
            <p className='empin-hero-t2'>To print the user bank statement in pdf</p>
            </div><div className='empin-img img5'></div>
          </div>
        <div className='empin-div' onClick={goBalance}>
          <div id="empin-hero">
            <p className='empin-hero-t1'>Balance Enquire</p>
            <p className='empin-hero-t2'>To check balance of a user</p>
            </div> <div className='empin-img img6'></div>
          </div>

      </div>
        {
           isLoading && <Loading data={"Fetching Details....."}/>
                } 
      </div>
  )
}
