import React,{useState} from 'react';
import axios from 'axios';
import Footer from '../Landingpage/Footer';
import '../../Styles/Deposit.css'
import InHeader from '../LoginsandModes/InHeader';
import DialougeBox from '../DialougeBox';
import Loading from '../Operations/Loading';
export default function Deposit() {
  const [user, setUser] = useState({accno:0,amount:0});
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }
   const [showMessage, setShowMessage] = useState(false);
   const[content,setContent]=useState("");
     const[isLoading,setLoading]=useState(false);
  const handleSubmit =async(e)=>{
     setLoading(true);
    if( user.accno!=0 && user.amount !=0)
    {
      try{
        const result=await axios.post("https://easybank-qgjy.onrender.com/bank/deposit",user);
        if(result.data.success)
        {
           setContent(`successfully deposited new balance is ${result.data.balance}`);
           setShowMessage(true);
      
        }
      }
      catch(e)
      {
        console.log(e);
        if(e.response)
        {
        if(e.response.status === 404)
        {
        setContent(`Invalid Account number, Try again!`);
           setShowMessage(true);
        setUser({accno:0,amount:0});
        }
        }
      }
      finally
      {
      setLoading(false);
      setUser({accno:0,amount:0});
    }
    }
    else{
      alert("invalid data");
    }
  }
  const handleClose=()=>{
            setShowMessage(false);
           
  }
  return (
    <div className='deposit'>
      <InHeader/>
      <center className='deposit-head-txt'>Deposit</center>
     <div className='deposit-div'>
      <div className='deposit-main'>
      <p>Enter accno:</p>
      <input type="number" placeholder='Acc no' value={user.accno} onChange={handleChange} name="accno"/>
      <p>Enter amount:</p>
      <input type="number" placeholder='Amount' value={user.amount} onChange={handleChange} name="amount"/>
      <center className="deposit-submit" onClick={handleSubmit}>Submit</center>
      </div>
      </div>
        {showMessage && (
        <DialougeBox onClose={handleClose}>
         <p className='emp-box-p1'>{content}</p>
        </DialougeBox>
      )}
        {
         isLoading && <Loading data={"Loading....."}/>
        } 
      <Footer/>
    </div>
  )
}
