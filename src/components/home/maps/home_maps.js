import React from 'react'
import map from '../../../assets/map_diagram.jpg'
import './home_maps.css'
import line from '../../../assets/line.png';
function HomeMaps() {
  return (
    <div className="_Map">
      <div className="_map-title">
      <h1 className="_session-title">SƠ ĐỒ PHÂN LÔ</h1>
      <img style={{ width: '150px', height: '10px' }}  alt='' src={line} />
      </div>
      <img src={map} style={{width : "500px" , height : "600px"}} alt=''/>
    </div>
  )
}

export default HomeMaps