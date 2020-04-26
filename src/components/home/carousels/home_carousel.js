import React from 'react'
import { Carousel } from 'antd'
import './home_carousel.css'
import house from '../../../assets/house.jpg'

function HomeCarousel() {
  return (
    <div>
      <Carousel autoplay>
        <div className="_image-box">
          <img style={{width: '1550px'}} src={house} alt="#"/>
        </div>
      </Carousel>
    </div>
  )
}

export default HomeCarousel