import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/AboutUs/AboutUs';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Header from './Pages/Shared/Header/Header';
import Appointment from './Pages/Appointment/Appointment/Appointment';


function App() {
  return (
    <div className="mx-w-7xl mx-auto">
      <Header></Header>

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='appointment' element={<Appointment></Appointment>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
