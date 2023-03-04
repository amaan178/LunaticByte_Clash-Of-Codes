import React from "react";
import "./main.css";
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img1 from "../../Assests/img1.png";
import img2 from "../../Assests/img2.png";
import img3 from "../../Assests/img3.png";
import img4 from "../../Assests/img4.png";
import img5 from "../../Assests/img5.png";
import img6 from "../../Assests/img6.png";
import img7 from "../../Assests/img7.png";
import img8 from "../../Assests/img8.png";
import img9 from "../../Assests/img9.png";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    descTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The Epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    descTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },
  {
    id: 3,
    imgSrc: img3,
    descTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },
  {
    id: 4,
    imgSrc: img4,
    descTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },
  {
    id: 5,
    imgSrc: img5,
    descTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },
  {
    id: 6,
    imgSrc: img6,
    descTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },
  {
    id: 7,
    imgSrc: img7,
    descTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },
  {
    id: 7,
    imgSrc: img7,
    descTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },
  {
    id: 8,
    imgSrc: img8,
    descTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },
  {
    id: 9,
    imgSrc: img9,
    descTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },
];
export default function Main() {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,descTitle,location,grade,fees,description})=>{
              return(
                <div className="singleDestination">

                  <div className="imageDiv">
                    <img src={imgSrc} alt={descTitle}/>
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{descTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon"/>
                      <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck className="icon"/>
                    </button>
                  </div>
                </div>
              )
          })
        }
      </div>
    </section>
  );
}
