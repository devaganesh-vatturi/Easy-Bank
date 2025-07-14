import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';


import Landing from './Components/Landingpage/Landing';
import EmpLogin from './Components/LoginsandModes/EmpLogin';
import EmpInterface from './Components/LoginsandModes/EmpInterface';
import AccHolderLogin from './Components/LoginsandModes/AccHolderLogin';
import AccHolderInterface from './Components/LoginsandModes/AccHolderInterface';
import EmpOperations from './Components/LoginsandModes/EmpOperations';
import AccHolderOperations from './Components/LoginsandModes/AccHolderOperations';
import BadGateWay from './Components/LoginsandModes/BadGateWay';
import AboutUs from './Components/Landingpage/AboutUs';
function App() {
 

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/employeelogin' element={<EmpLogin/>}/>
      <Route path='/accholderlogin' element={<AccHolderLogin/>}/>
      <Route path='/empdash' element={<EmpInterface/>}/>
       <Route path='/accdash' element={<AccHolderInterface/>}/>
       <Route path='/empoperations' element={<EmpOperations/>}/>
        <Route path='/accoperations' element={<AccHolderOperations/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='*' element={<BadGateWay/>}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
