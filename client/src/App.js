import logo from './logo.svg';
import './App.css';
import SIgnup from './comp/SIgnup';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './comp/Login';
import Dashboard from './comp/Dashboard';
import Logout from './comp/Logout';
import Protected from './comp/Protected';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<SIgnup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path='/dashboard' element={<Protected><Dashboard/></Protected>}></Route>
    <Route path='/logout' element={<Logout/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
