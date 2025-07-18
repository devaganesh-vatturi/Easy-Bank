import React, {useEffect, useState}from 'react';
import axios from 'axios';
import PrintList from '../PrintList';
import Footer from '../Landingpage/Footer';
import '../../Styles/History.css';
import DialougeBox from '../DialougeBox';
import { useLocation } from 'react-router-dom';
import {jsPDF} from 'jspdf';
import Loading from '../Operations/Loading';
import autoTable from 'jspdf-autotable';
import InHeader from '../LoginsandModes/InHeader';
export default function History() {
  const location=useLocation();
  const qp=new URLSearchParams(location.search);
  const [accno,setAccno]=useState(null);
  
  const [user, setUser] = useState({accno:0});
  const [history, setHistory] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const[isLoading,setLoading]=useState(false);
  const[content,setContent]=useState(""); 
  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }
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
}, [location.search]); // rerun only when URL changes

useEffect(()=>{
  if(accno)
  {
    setUser({accno:accno});
  }
},[accno]);
  const generatePDF = (data) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Transaction Report', 14, 20);
  
    // Convert data to table format
    const tableData = data.map((item, index) => [
      index + 1,
      item.accno,
      item.amount,
      item.balance,
      item.description
    ]);
  
    const headers = [['S.No', 'Account No', 'Amount', 'Balance', 'Description']];
  
    autoTable(doc, {
      head: headers,
      body: tableData,
      startY: 30, // Start position from top
      theme: 'grid',
      styles: {
        fontSize: 10,
        cellPadding: 3,
        valign: 'middle',
        halign: 'center',
      },
      headStyles: {
        fillColor: [22, 160, 133],
        textColor: [255, 255, 255], 
      },
    });
  
    doc.save('transaction_report.pdf');
  };
  const handleSubmit =async(e)=>{
     setLoading(true);
    if(user.accno!=0)
    {
      try{
        const result=await axios.post("https://easybank-qgjy.onrender.com/bank/history",user);
        if(result.data.success)
        {
            setHistory(result.data.history);
            generatePDF(result.data.history);
            console.log(result.data.history);
        }
        else{
          console.log("invalid accno");
        }
      }
      catch(e)
      {
        if(e.response)
        {
          if(e.response.status == 401)
          {
             setContent(`Invalid Account number`);
          setShowMessage(true);
        setUser({accno:0});
          }
        }
        
      }
       finally
    {
      setLoading(false);
    }
    }
    else{
      setContent(`Invalid data please reenter`);
          setShowMessage(true);
        setUser({accno:0});
    }
  }
    const handleClose=()=>{
            setShowMessage(false);
           
  }
  return (
    <div className='history'>
      <InHeader/>
      <div className='history-div'>
        <center className='history-p'>History</center>
      <div className='history-main'>
        {
          accno ? ( <p>My Account Number is {accno}</p>) : 
          ( <> <p>Enter acc no</p>
      <input type="text" name="accno" value={user.accno}  onChange={handleChange} /></> )
        }
     
    <center className="history-submit" onClick={handleSubmit}>Submit</center>
       
      
      </div>
      <div className='history-hero'>
         {history.length > 0 ?( history.map((obj,index)=>(
           <PrintList accno={obj.accno} amount={obj.amount}balance={obj.balance} description={obj.description}
           type={obj.type} time={obj.time}/>
          ))):(<p></p>)
        }
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
