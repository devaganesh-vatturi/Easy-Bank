import React,{useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Landingpage/Footer';
import '../../Styles/Transfer.css';
import DialougeBox from '../DialougeBox';
import Loading from '../Operations/Loading';
import InHeader from '../LoginsandModes/InHeader';
export default function Transfer() {
  const location=useLocation();
  const qp=new URLSearchParams(location.search);
 const [accno,setAccno]=useState(null);
  const [user, setUser] = useState({accno:0,taccno:0,amount:0});
  const [showMessage, setShowMessage] = useState(false);
  const[isLoading,setLoading]=useState(false);
  const[content,setContent]=useState("");
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
 useEffect(()=>{
  if(accno)
 {   
   setUser({accno:accno});

 }},[accno]);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }

  const handleSubmit = async(e)=>{
    setLoading(true);
    if(user.accno !=0 && user.taccno !=0 && user.amount >0)
    {
      try{
        const result= await axios.post("https://easybank-qgjy.onrender.com/bank/transfer",user);
        if(result.data.success)
        {
          setContent(`successfully transfered new balance is ${result.data.balance}`);
          setShowMessage(true);
        setUser({accno:0,taccno:0,amount:0});
        }
      }
      catch(e)
      {
        console.log(e);
        if(e.response)
        {
          if(e.response.status === 401)
          {
            setContent(`Insufficient Balance`);
            setShowMessage(true);
            setUser({accno:0,taccno:0,amount:0});
          }
        }
      }
    finally
    {
      setLoading(false);
    }
    }
    else{
      setContent(`Invalid Data, please enter valid data`);
          setShowMessage(true);
        setUser({accno:0,taccno:0,amount:0});
    }
  }
   const handleClose=()=>{
            setShowMessage(false);
           
  }
  return (
    <div className='transfer'>
      <InHeader/>
      <div className='transfer-div'>
        <center className='transfer-p'>Transfer</center>
      <div className='transfer-main'>
       {
          accno ? ( <p>My Account Number is {accno}</p>) : 
          ( <> <p>Enter acc no</p>
      <input type="text" name="accno" value={user.accno}  onChange={handleChange} /></> )
        }
      <p>Enter accno you want to transfer:</p>
      <input type="number" placeholder='Acc no' onChange={handleChange} name="taccno" />
      <p>Enter amount:</p>
      <input type="number" placeholder='Balance' onChange={handleChange} name="amount" />
     <center className="transfer-submit" onClick={handleSubmit}>Submit</center>
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
