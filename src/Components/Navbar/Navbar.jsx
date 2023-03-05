import React,{useState} from 'react'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import Modal from "../Modal/Modal";
import useModal from '../Modal/useModal';
import { useNavigate } from 'react-router-dom'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {Link} from 'react-scroll';

const Navbar = () => {
  const[active, setActive] = useState('navBar')
  const navigate = useNavigate();
  const auth = getAuth()
  //Fucntion to toggle navBar
  const showNav = () =>{
    setActive('navBar activeNavbar')
  }

  //Fucntion to toggle navBar
  const removeNavbar = () =>{
    setActive('navBar ')
  }
  const {isShowing, toggle} = useModal();
  

  const handleSignOut = async () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href="#" className='logo flex'>
            <h1><SiYourtraveldottv className='icon' style={{marginRight:"8px"}}/>Lunatic.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            
            <li className="navItem">
              <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="navLink">Home</Link>
            </li>

            <li className="navItem">
            <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="navLink">About</Link>
            </li>

            <li className="navItem">
            <Link to="packages" spy={true} smooth={true} offset={50} duration={500} className="navLink">Packages</Link>
            </li>

            <li className="navItem">
              <Link to="news" spy={true} smooth={true} offset={50} duration={500} className="navLink">News</Link>
            </li>

          <button className='btn' style={{marginTop:"0rem"}} onClick={toggle}>
            <a href='#'>BOOK NOW</a>
          </button>
          <Modal
            isShowing={isShowing}
            hide={toggle}
          />

          <button className='btn' style={{marginTop:"0rem"}} onClick={handleSignOut}>
            <a href='#'>LOGOUT</a>
          </button>

          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default Navbar