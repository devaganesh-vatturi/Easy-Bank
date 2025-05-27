import React,{useState} from 'react';
import axios from 'axios';
import Footer from '../Landingpage/Footer';
import '../../Styles/Withdraw.css';
import Loading from '../Operations/Loading';
import DialougeBox from '../DialougeBox';
import InHeader from '../LoginsandModes/InHeader';
export default function Withdraw() {
  const [user, setUser] = useState({accno:0,amount:0});
  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }
   const [showMessage, setShowMessage] = useState(false);
   const[content,setContent]=useState("");
     const[isLoading,setLoading]=useState(false);
  const handleSubmit =async(e)=>{
    console.log(user);
     setLoading(true);
    if(user.accno!=0 && user.amount > 0)
    {
      try{
        const result=await axios.post("https://easybank-qgjy.onrender.com/bank/withdraw",user);
        if(result.data.success)
        {
           setContent(`successfully debited new balance is ${result.data.balance}`);
           setShowMessage(true);
        setUser({accno:0,amount:0});
        }
      }
      catch(e)
      {
        console.log(e);
         if(e.response)
        {
        if(e.response.status === 404)
        {
        setContent(`Account number Not found`);
        setShowMessage(true);
        setUser({accno:0,amount:0});
        }}
      }
        finally
    {
      setLoading(false);
    }
    }
    else{
        setContent(`Enter a valid data`);
        setShowMessage(true);
    }
  }
  const handleClose=()=>{
            setShowMessage(false);
           
  }
  return (
    <div className='wdraw'>
      <InHeader/>
      <center className='wdraw-head-txt'>With Draw</center>
      <div className='wdraw-div'>
      <div className='wdraw-main'>
      <p>Enter accno:</p>
      <input type="number" placeholder='Acc no' value={user.accno} onChange={handleChange} name="accno" />
      <p>Enter amount:</p>
      <input type="number" placeholder='Amount' value={user.amount} onChange={handleChange} name="amount" />
     <center className="wdraw-submit" onClick={handleSubmit}>Submit</center>
      </div>
      </div>
      {showMessage && (
       <DialougeBox onClose={handleClose}>
         <p className='emp-box-p1'>{content}</p>
        </DialougeBox>
       ) }
        {
                   isLoading && <Loading data={"Loading....."}/>
             }
      <Footer/>
      </div>
  )
}
