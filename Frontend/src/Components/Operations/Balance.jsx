import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Footer from '../Landingpage/Footer';
import '../../Styles/Balance.css'
import InHeader from '../LoginsandModes/InHeader';
import { useLocation } from 'react-router-dom';
export default function Balance() {
  const location= useLocation();
  const qp=new URLSearchParams(location.search);
   const [accno,setAccno]=useState(null);
  const [user, setUser] = useState({accno:0});
    useEffect(() => {
    const encodedAccno = qp.get('accno');
    if (encodedAccno) {
      try {
        const decoded = atob(encodedAccno);
        setAccno(decoded);
      } catch (err) {
        console.error("Invalid base64 for accno:", err.message);
        setAccno(null); // fallback
      }
    }
  }, [location.search]);
   useEffect(() => {
    if (accno) {
      setUser({ accno: Number(accno) });
    }
  }, [accno]);
  const [gotBalance, setgotBalance]=useState({
    state:false,
    amount:0
  });
  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }
  const handleSubmit=async(e)=>{
    console.log(user.accno);
    if(user.accno!=0)
    {
      try{
        const result=await axios.post("https://easybank-qgjy.onrender.com/bank/checkbalance",user);
        if(result.data.success)
        {
          setgotBalance({ state :true, amount:result.data.balance});
          console.log(gotBalance);
        }

      }
      catch(e)
      {
        if(e.response)
        {

        alert("user not fond")
        }
        else{
              console.log(e)
        }
        
        
      }
    }
    else{
      alert("accno is not valid");
    }
  }
  return (
    <div  className='bal'>
     <InHeader/>
     <div className='bal-div'>
      <center className='bal-p'>Balance</center>
      <div className='bal-main'>
       {
          accno ? ( <p>My Account Number is {accno}</p>) : 
          ( <> <p>Enter acc no</p>
      <input type="text" name="accno" value={user.accno}  onChange={handleChange} /></> )
        }
     <center className="bal-submit" onClick={handleSubmit}>Submit</center>
     {gotBalance.state && <center className='bal-bal'>The balance is {gotBalance.amount}</center>}
      </div>
      </div>
      <Footer/>
    </div>
  )
}
