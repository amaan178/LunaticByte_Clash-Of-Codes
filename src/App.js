import logo from './logo.svg';
import './App.css';
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
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path="safety-measures" element={<SafetyMeasures />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
