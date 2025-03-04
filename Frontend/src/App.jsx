import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import CreateUser from './Components/CreateUser';
import DeleteUser from './Components/DeleteUser';
import Deposit from './Components/Deposit';
import History from './Components/History';
import Transfer from './Components/Transfer';
import Withdraw from './Components/Withdraw';
function App() {
 

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
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
