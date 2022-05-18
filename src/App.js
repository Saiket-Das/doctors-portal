import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/AboutUs/AboutUs';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Header from './Pages/Shared/Header/Header';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory/MyHistory';
import Users from './Pages/Dashboard/All Users/Users';
import RequireAdmin from './Pages/Login/RequireAdmin/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors/ManageDoctors';


function App() {
  return (
    <div className="mx-w-7xl mx-auto">
      <Header></Header>

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>

        <Route path='appointment'
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }>
        </Route>

        <Route path='dashboard'
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
          {/* NESTED ROUTE into Dashboard */}
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>

          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}>
          </Route>

          <Route path='doctors' element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}>
          </Route>

          <Route path='manageDoctors' element={<RequireAdmin>
            <ManageDoctors></ManageDoctors>
          </RequireAdmin>}>
          </Route>

        </Route>


        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes >
      <ToastContainer></ToastContainer>

    </div >
  );
}

export default App;
