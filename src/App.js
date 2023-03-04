import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SafetyMeasures from './Components/SafetyMeasures/SafetyMeasures';
import Login from '../src/Components/Login/Login';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path="safety-measures" element={<SafetyMeasures />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
