import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';  
import Clintprofile from './pages/Clintprofile';
import Dashboard from './pages/Dashboard'; 
import AddeditMeeting from './pages/AddeditMeeting'; 
import Businessanalytics from './pages/Businessanalytics';
import Clock from './components/Clock'
import Inprogress from './pages/Inprogress';
import Importantmeetings from './pages/Importantmeetings';
import ResetPassword from './pages/ResetPassword';

function App() {
  const location = useLocation();
  // const isAuthenticated = !!localStorage.getItem("authToken");
  return (
    <>
     
      {location.pathname !== '/' && location.pathname !== '/login' && <Navbar />}
      
      <Routes>
       
        <Route path="/login" element={<Login />} />
        
         {/* Protected Resource */}
         {/* <Route
          path="/protected"
          element={isAuthenticated ? <ProtectedResource /> : <Navigate to="/login" />}
        /> */}
       
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clintprofile" element={<Clintprofile/>} />
        <Route path="/addeditmeeting" element={<AddeditMeeting />} />
        <Route path="/businessanalytics" element={<Businessanalytics />} />
        <Route path="/clock" element={< Clock />} />
        <Route path="/inprogress" element={<  Inprogress />} />
        <Route path="/importantmeetings" element={<    Importantmeetings />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Login />} />
      </Routes>

      
      {location.pathname !== '/' && location.pathname !== '/login' && <Footer />}
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
