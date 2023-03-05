import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import {TbMapSearch} from 'react-icons/tb';
import { SiGooglemaps } from 'react-icons/si';
import './GoogleMapLunatic.css'  
  export default function GoogleMapLunatic() {

    return (
      <div className='map_container'>
      <div className='map_outerBox'></div>
      <div className='map_Box'>
        <div spacing={4}>
          <div className="input_container_login">
              <span className='icon_login'><TbMapSearch/></span>
              <input placeholder="Origin" title="Inpit title" name="email" type="text" className="input_field_login" id="email_field"/>
          </div>
          <div className="input_container_login">
              <span className='icon_login'><SiGooglemaps/></span>
              <input placeholder="Destination" title="Inpit title" name="email" type="text" className="input_field_login" id="email_field"/>
          </div>
          <button className="btn flex">
              Calculate route
          </button>
        </div>
      </div>
    </div>
    )
  }
