import React, {useState}from 'react';
import axios from 'axios';
import PrintList from './PrintList';
import Header from './Header';
import Footer from './Footer';
import '../Styles/History.css';
import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';
export default function History() {
  const [user, setUser] = useState({accno:0});
  const [history, setHistory] = useState([]);
  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }

  const generatePDF = (data) => {
    const doc = new jsPDF();
  
    // Title
    doc.setFontSize(18);
    doc.text('Transaction Report', 14, 20);
  
    // Convert data to table format
    const tableData = data.map((item, index) => [
      index + 1, // Serial Number
      item.accno,
      item.amount,
      item.balance,
      item.description
    ]);
  
    // Define table headers
    const headers = [['S.No', 'Account No', 'Amount', 'Balance', 'Description']];
  
    // Add table using autoTable
    autoTable(doc, {
      head: headers,
      body: tableData,
      startY: 30, // Start position from top
      theme: 'grid', // Table theme
      styles: {
        fontSize: 10,
        cellPadding: 3,
        valign: 'middle',
        halign: 'center',
      },
      headStyles: {
        fillColor: [22, 160, 133], // Header color
        textColor: [255, 255, 255], // Header text color
      },
    });
  
    // Save PDF automatically
    doc.save('transaction_report.pdf');
  };
  const handelSubmit =async(e)=>{
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
        console.log(e);
      }
    }
    else{
      alert("invalid data");
    }
  }
  return (
    <div className='history'>
      <Header/>
      <div className='history-main'>
      <p>Enter acc no</p>
      <input type="text" name="accno" onChange={handleChange} />
      <div className='history-sub-div'>
      <p onClick={handelSubmit} className='history-submit'>Submit</p>
      </div>
       
      
      </div>
      <div className='history-hero'>
         {history.length > 0 ?( history.map((obj,index)=>(
           <PrintList accno={obj.accno} amount={obj.amount}balance={obj.balance} description={obj.description}
           type={obj.type} time={obj.time}/>
          ))):(<p>no transaction exists</p>)
        }
        </div>
      <Footer/>
    </div>
  )
}
