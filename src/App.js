import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/login';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path = "/login" element={<Login/>}/>
        <Route exact path = "*" element={<Login/>}/>
        <Route exact path = "/sign-up" element={<SignIn/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Login/>
      <SignIn/> */}
    </div>
  );
}

export default App;
