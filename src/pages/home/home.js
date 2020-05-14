import React from 'react'
import './home.css'
import HomeCarousel from '../../components/home/carousels/home_carousel'
import { Row, Col } from 'antd';
import line from '../../assets/line.png';
import banner2 from '../../assets/Banner/banner2.jpg'

function Home() {
  return (
    <div >
      <HomeCarousel />
      <div className="_Home">
        <h1 className="_session-title">Giới thiệu </h1>
        <img style={{ width: '150px', height: '10px' }}  alt='' src={line} />
        <Row >
          <Col className="_Home-content" span={12}>
            <h2 className="_session-title"> WareHouse Management </h2>
            <p >Quận Tân Bình là một trong những quận nội thành của Thành phố Hồ Chí Minh có nhiều điều kiện thuận lợi trong việc giao lưu kinh tế với các quận trung tâm và ngoại thành. Với tốc độ phát triển về mua sắm trực tuyến tại quận Tân Bình và các khu vực lân cận đã thách thức việc lưu trữ hàng hóa với các doanh nghiệp, cá nhân kinh doanh riêng. Làm sao có một nơi chứa hàng có độ lớn vừa phải lại an toàn về hàng hóa được lưu trữ đó là nỗi băn khoăn của không ít các doanh nghiệp, cá nhân đang kinh doanh.</p>
          </Col>
          <Col className="_Home-content" span={12}>
            <div className="_image-box">
              <img style={{ width: '900px' }} src={banner2} alt="#" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home
