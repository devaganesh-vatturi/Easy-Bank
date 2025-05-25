import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import CreateUser from './Components/Operations/CreateUser';
import DeleteUser from './Components/Operations/DeleteUser';
import Deposit from './Components/Operations/Deposit';
import History from './Components/Operations/History';
import Transfer from './Components/Operations/Transfer';
import Withdraw from './Components/Operations/Withdraw';
import Landing from './Components/Landingpage/Landing';
import EmpLogin from './Components/LoginsandModes/EmpLogin';
import EmpInterface from './Components/LoginsandModes/EmpInterface';
import AccHolderLogin from './Components/LoginsandModes/AccHolderLogin';
function App() {
 

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/employeelogin' element={<EmpLogin/>}/>
      <Route path='/accholderlogin' element={<AccHolderLogin/>}/>
      <Route path='/empdash' element={<EmpInterface/>}/>
      <Route path='/createuser' element={<CreateUser/>}/>
      <Route path='/deleteuser' element={<DeleteUser/>}/>
      <Route path='/deposit' element={<Deposit/>}/>
      <Route path='/withdraw' element={<Withdraw/>}/>
      <Route path='/transfer' element={<Transfer/>}/>
      <Route path='/history' element={<History/>}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
