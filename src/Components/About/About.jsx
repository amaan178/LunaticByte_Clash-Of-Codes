import { useEffect } from 'react'
import './About.css'
import img9 from "../../Assests/travel_around_the_world.png";
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import { useNavigate } from 'react-router';



const AboutPage = () => {
	useEffect(() => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	}, [])
    
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/safety-measures');
	return (
		<div className='about' id="about">
            <div className='row custom-margin'>
                <img title='About us' alt='About-us-content' src={img9} className="aboutBanner" />
                <div className="secTitle">
                    <h3 className="title">About Us</h3>
                    <p>
                    Nurtured from the seed of a single great idea - to empower the traveller - Lunatic is a pioneer in India’s online travel industry. Founded in the year 2000 by Deep Kalra, Lunatic came to life to empower the Indian traveller with instant bookings and comprehensive choices. The company initiated its journey serving the US-India travel market offering a range of best-value products and services powered by technology and round-the-clock customer support.
                    After consolidating its position in the market as a brand recognised for its reliability and transparency, Lunatic
                    </p>
                    <button className="btn flex" onClick={handleOnClick}>
                      Our Safety Measures <HiOutlineClipboardCheck className="icon"/>
                    </button>
                </div>
            </div>
		</div>
	)
}

export default AboutPage
