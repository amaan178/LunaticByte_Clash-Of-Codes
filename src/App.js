import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/login';
import SignIn from './Components/SignIn/SignIn';


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
      </Routes>
      </BrowserRouter>
      {/* <Login/>
      <SignIn/> */}
    </div>
    </>
    
  );
}

export default App;
