import React,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Operations/Loading';
import Balance from '../Operations/Balance';
import Transfer from '../Operations/Transfer';
import History from '../Operations/History';
import SelfDetails from '../Operations/SelfDetails';
import BadGateWay from './BadGateWay';
export default function AccHolderOperations() {
    const [token,setToken]=useState(null);
    const [filter,setFilter]=useState(null);
    const [status, setStatus] = useState(true);
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
       setLoading(true);
      }
      else{
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
    }
    };

    verifyToken();
  }, [token]);

  const renderComponent = () => {
    switch (filter) {
      case 'balance':
        return <Balance/>;
      case 'transfer':
        return <Transfer/>;
      case 'self':
        return <SelfDetails/>;
      case 'history':
        return <History/> ;
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
