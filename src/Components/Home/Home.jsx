import React, { useState } from "react";
import "./home.css";
import video from "../../Assests/video2.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter, HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";
import {BsSearch} from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import {SiTripadvisor} from 'react-icons/si'
import { FiFacFaTripadvisorebook } from "react-icons/fi";
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import img1 from "../../Assests/img1.png";
import img2 from "../../Assests/img2.png";
import img3 from "../../Assests/img3.png";
import img4 from "../../Assests/img4.png";
import img5 from "../../Assests/img5.png";
import img6 from "../../Assests/img6.png";
import img7 from "../../Assests/img7.png";
import img8 from "../../Assests/img8.png";
import img9 from "../../Assests/img9.png";
import img10 from "../../Assests/abdu_dhabi.png";
import img11 from "../../Assests/sharjah.png";
import img12 from "../../Assests/nyc.png";


import { useNavigate } from "react-router";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    descTitle: "DUBAI",
    location: "UAE",
    grade: "Ultramodern Architecture",
    fees: "₹60,000/-",
    description:
      "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. The city is so rich and full of luxury hotels, cars, and people which can make it so attractive to tourists.",
  },
  {
    id: 22,
    imgSrc: img10,
    descTitle: "Sharjah",
    location: "UAE",
    grade: "Ultramodern Architecture",
    fees: "₹90,000/-",
    description:
      "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. The city is so rich and full of luxury hotels, cars, and people which can make it so attractive to tourists.",
  },
  {
    id: 22,
    imgSrc: img11,
    descTitle: "Abu Dhabi",
    location: "UAE",
    grade: "Ultramodern Architecture",
    fees: "₹90,000/-",
    description:
      "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. The city is so rich and full of luxury hotels, cars, and people which can make it so attractive to tourists.",
  },
  {
    id: 27,
    imgSrc: img2,
    descTitle: "PARIS",
    location: "France",
    grade: "City of light and love",
    fees: "₹1,60,000/-",
    description:
      'Paris, renowned as the city of light and love, is simply one of Europes most enthralling destinations. For its leading role in the arts and sciences, as well as its very early system of street lighting, in the 19th century it became known as "the City of Light"',
  },
  {
    id: 3,
    imgSrc: img3,
    descTitle: "ROME",
    location: "ITALY",
    grade: "Comune di Roma Capitale",
    fees: "₹1,80,000/-",
    description:
      'Rome is often referred to as the City of Seven Hills due to its geographic location, and also as the "Eternal City". Rome is generally considered to be the "cradle of Western civilization and Christian culture", and the centre of the Catholic Church.',
  },
  {
    id: 4,
    imgSrc: img4,
    descTitle: "MALDIVES",
    location: "Maldives",
    grade: "A Stunning Tropical Getaway",
    fees: "₹1,00,000/-",
    description:
      "Take your beach love to Maldives. You will love the beach activities and island hopping. Maldives is also an ideal destination for a relaxing break.",
  },
  {
    id: 5,
    imgSrc: img5,
    descTitle: "TOKYO",
    location: "JAPAN",
    grade: "A Bustling Metropolis in Japan",
    fees: "₹80,000/-",
    description:
      "Soak in the rich culture and heritage of Tokyo. You will love the stunning cherry blossoms, fairs and festivals. The local cuisines at Tokyo are worth trying out too.",
  },
  {
    id: 6,
    imgSrc: img6,
    descTitle: "Las Vegas",
    location: "USA",
    grade: "The city of nightlife",
    fees: "₹2,50,000/-",
    description:
      "The city of nightlife, entertainment and adventures, Vegas is a seductive mix of decadence, fun and lavish holiday experiences. Tourists love Vegas for its casinos, gaming nights, neon-lit neighbourhoods, food extravaganzas, shopping centres, wild parties, lush green parks and quirky museums.",
  },
  {
    id: 6,
    imgSrc: img12,
    descTitle: "NYC",
    location: "USA",
    grade: "The city of nightlife",
    fees: "₹2,50,000/-",
    description:
      "The city of nightlife, entertainment and adventures, Vegas is a seductive mix of decadence, fun and lavish holiday experiences. Tourists love Vegas for its casinos, gaming nights, neon-lit neighbourhoods, food extravaganzas, shopping centres, wild parties, lush green parks and quirky museums.",
  },
  {
    id: 7,
    imgSrc: img7,
    descTitle: "BALI",
    location: "INDONESIA",
    grade: "Tropical Beach Paradise",
    fees: "₹70,000/-",
    description:
      "Embark upon sizzling gastronomic experiences in Bali. You can expect frequent heavy rainfalls with high humidity levels. You will also enjoy the beaches at Bali.",
  },
  {
    id: 8,
    imgSrc: img8,
    descTitle: "KRABI",
    location: "THAILAND",
    grade: "Tropical Paradise in Thailand",
    fees: "₹50,000/-",
    description:
      "If you love watching the ocean, then Krabi is home to gorgeous beaches. You will love the beaches and water sports. Krabi is also very popular among relaxation-seekers.",
  },
  {
    id: 9,
    imgSrc: img9,
    descTitle: "SINGAPORE",
    location: "SINGAPORE",
    grade: "Tropical Island",
    fees: "₹1,80,000/-",
    description:
      "A melting pot of cultures, Singapore is a cosmopolitan city with a vibrant shopping, food, entertainment and nightlife scene. It is also deep-rooted in history and tradition.",
  },
  // {
  //   id: 9,
  //   imgSrc: img9,
  //   descTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The Epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  // },
];

export default function Home() {
  const [rangeType, setRangeType] = useState('linear');
  const [rangeValue, setRangeValue] = useState(50);
  const [data, setData] = useState({
    location: ""
  });

  const navigate = useNavigate();

  const handleInputs = (event) => {
    const inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  const handleRangeChange = (event) => {
    const value = event.target.value;

    if (rangeType === 'logarithmic') {
      // Convert range value from logarithmic scale to linear scale
      const min = 1;
      const max = 100;
      const logValue = Math.log(value) / Math.log(max / min);
      const linearValue = logValue * (max - min) + min;
      setRangeValue(linearValue);
    } else {
      setRangeValue(value);
    }
  };
  const handleRangeTypeChange = (event) => {
    const value = event.target.value;
    setRangeType(value);
  };

  const handleSubmit = () => {
    navigate("/maps")
  };

  const handleClick = () => {
    window.location.href = 'https://www.tripadvisor.in/';
  }

  
  return (
    <>
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop typeof="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search Your Holiday</h1>
        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city"> Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here.." name="location"  onChange={(event) => handleInputs(event)} />
              <GrLocation />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="city"> Search your date:</label>
            <div className="input flex">
              <input type="data" placeholder="Enter name here.." />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">₹{rangeValue}</h3>
            </div>
            <div className="input flex">
            <input type="range" min="0" max="1000000" value={rangeValue} onChange={handleRangeChange} />
      
            </div>
          </div>
          <div className="searchOptions flex" onClick={handleSubmit} >
            <BsSearch className="icon" />
            <span>search via map</span>
          </div>
        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <SiTripadvisor className="icon"/>
          </div>
          <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
          </div>
        </div>
      </div>
    </section>

    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Searched destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, descTitle, location, grade, fees, description }) => {
            if(data.location==location){
              return (
                <div className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={descTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{descTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>
                          {grade}
                          <small>+1</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>
  
                    <button className="btn flex" onClick={handleClick}>
                      DETAILS <HiOutlineClipboardCheck className="icon" />
                    </button>
                  </div>
                </div>
              );
            }
            
          }
        )}
      </div>
    </section>

    </>
  );
}
