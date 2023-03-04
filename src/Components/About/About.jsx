import { useEffect } from 'react'
import './About.css'
import img9 from "../../Assests/travel_around_the_world.png";

const AboutPage = () => {
	useEffect(() => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	}, [])

	return (
		<div className='about'>
            <div className='row custom-margin'>
                <img title='About us' alt='About-us-content' src={img9} className="aboutBanner" />
                <div className="secTitle">
                    <h3 className="title">About Us</h3>
                    <p>
                        In a short span of 28 years, Dwarkadas J. Sanghvi College of Engineering
                        (DJSCE), an Autonomous Institution, affiliated to the University of
                        Mumbai and owned by SVKM has come a long way and has made its impact
                        felt not only in the country, but also abroad. Our students have been
                        performing exceedingly well in national and globally competent
                        multinational companies and also in the universities in India and abroad
                        as they pursue their higher education.
                    </p>
                </div>
            </div>
		</div>
	)
}

export default AboutPage
