import React from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
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
    descTitle: "DUBAI",
    location: "UAE",
    grade: "Ultramodern Architecture",
    fees: "₹60,000/-",
    description:
      "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. The city is so rich and full of luxury hotels, cars, and people which can make it so attractive to tourists.",
  },
  {
    id: 2,
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
    location: "NEVADA, U.S",
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
export default function Main() {
  return (
    <section className="main container section" id="packages">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, descTitle, location, grade, fees, description }) => {
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

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
