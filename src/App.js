import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/login';
import SignIn from './Components/SignIn/SignIn';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SafetyMeasures from './Components/SafetyMeasures/SafetyMeasures';
import HomePage from './Components/HomePage/HomePage';
;

function App() {
  return (
    <>
    <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      ></Toaster>
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route exact path = "/login" element={<Login/>}/>
        <Route exact path = "*" element={<Login/>}/>
        <Route exact path = "/sign-up" element={<SignIn/>}/>
        <Route exact path = "/dashboard" element={<Dashboard/>}/>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path="safety-measures" element={<SafetyMeasures />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
