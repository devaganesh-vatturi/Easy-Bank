import React,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import InHeader from './InHeader'
import axios from 'axios';
import Loading from '../Operations/Loading';
import CreateUser from '../Operations/CreateUser';
import Balance from '../Operations/Balance';
import Deposit from '../Operations/Deposit';
import Transfer from '../Operations/Transfer';
import Withdraw from '../Operations/Withdraw';
import History from '../Operations/History';
import BadGateWay from './BadGateWay';
export default function EmpOperations() {
    const [token,setToken]=useState(null);
    const [filter,setFilter]=useState(null);
    const [status, setStatus] = useState(false);
    const location=useLocation();
    const[isLoading,setLoading]=useState(false);
    useEffect(() => {
        setLoading(true);
       const qp = new URLSearchParams(location.search);
       const t = qp.get('token');
       const fil = qp.get('filter');
       setToken(t);
       setFilter(fil);
       setLoading(false);
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
  }, [token]);

  const renderComponent = () => {
    switch (filter) {
      case 'createuser':
        return <CreateUser/>;
      case 'balance':
        return <Balance/>;
      case 'deposit':
        return <Deposit/>;
      case 'transfer':
        return <Transfer/>;
      case 'withdraw':
        return <Withdraw/>;
      case 'history':
        return <History/> 
      default:
        return <BadGateWay/>;
    }
  };

    if(!status) return <BadGateWay/>;
  return (
    <div>
          { status && renderComponent()}
          {
           isLoading && <Loading data={"Loading....."}/>
           } 
    </div>
  )
}
