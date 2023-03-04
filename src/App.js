import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/login';
import SignIn from './Components/SignIn/SignIn';
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
      
      <BrowserRouter>
      <Routes>
        <Route exact path = "/login" element={<Login/>}/>
        <Route exact path = "*" element={<Login/>}/>
        <Route exact path = "/sign-up" element={<SignIn/>}/>
        <Route exact path = "/home" element={<HomePage/>}/>
          <Route exact path="safety-measures" element={<SafetyMeasures />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
