import React,{useState} from 'react'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  const[active, setActive] = useState('navBar')
  //Fucntion to toggle navBar
  const showNav = () =>{
    setActive('navBar activeNavbar')
  }

  //Fucntion to toggle navBar
  const removeNavbar = () =>{
    setActive('navBar ')
  }


  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href="#" className='logo flex'>
            <h1><SiYourtraveldottv className='icon'/>Lunatic.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

          <button className='btn'>
            <a href='#'>BOOK NOW</a>
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