import React from 'react'
import './community.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import giaohangnhanh from '../../../assets/Community/giaohangnhanh.png'
import lazada from '../../../assets/Community/lazada.png'
import tiki from '../../../assets/Community/tiki.png'
import shopee from '../../../assets/Community/shopee.png'
import sendo from '../../../assets/Community/sendo.png'

function Community() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 5000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel responsive={responsive} className="Community-style">
      <img style={{ width: '300px', height: '150px' }} src={giaohangnhanh} alt="#" />
      <img style={{ width: '300px', height: '150px' }} src={lazada} alt="#" />
      <img style={{ width: '300px', height: '150px' }} src={tiki} alt="#" />
      <img style={{ width: '300px', height: '150px' }} src={shopee} alt="#" />
      <img style={{ width: '300px', height: '150px' }} src={sendo} alt="#" />
    </Carousel>
    // <div className="Community-style">      
    //   <div className="image-community" style={{height: '200px'}}>
    //       <img style={{width: '300px', height: '150px'}} src={giaohangnhanh} alt="#"/>
    //       <img style={{width: '300px', height: '150px'}} src={lazada} alt="#"/>
    //       <img style={{width: '300px', height: '150px'}} src={tiki} alt="#"/>
    //       <img style={{width: '300px', height: '150px'}} src={shopee} alt="#"/>
    //     </div>
    // </div>
  )
}

export default Community