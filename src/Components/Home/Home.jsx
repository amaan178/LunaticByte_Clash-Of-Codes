import React, { useState } from "react";
import "./home.css";
import video from "../../Assests/video2.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

export default function Home() {
  const [rangeType, setRangeType] = useState('linear');
  const [rangeValue, setRangeValue] = useState(50);

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
  
  return (
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
              <input type="text" placeholder="Enter name here.." />
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
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
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
  );
}
