import React from 'react'
import { Carousel } from 'antd'
import './home_carousel.css'
import banner1 from '../../../assets/Banner/banner1.jpg'
import banner2 from '../../../assets/Banner/banner2.jpg'
import banner3 from '../../../assets/Banner/banner3.jpg'
import banner4 from '../../../assets/Banner/banner4.jpg'

function HomeCarousel() {
  return (
    <div>
      <Carousel autoplay>
        <div className="_image-box">
          <img style={{width: '1550px'}} src={banner1} alt="#"/>         
        </div>
        <div className="_image-box">
          <img style={{width: '1550px'}} src={banner2} alt="#"/>         
        </div>
        <div className="_image-box">
          <img style={{width: '1550px'}} src={banner3} alt="#"/>         
        </div>
        <div className="_image-box">
          <img style={{width: '1550px'}} src={banner4} alt="#"/>         
        </div>
      </Carousel>
    </div>
  )
}

export default HomeCarousel