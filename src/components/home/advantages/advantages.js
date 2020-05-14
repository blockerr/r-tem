import React from 'react'
import './advantages.css'
import line from '../../../assets/line.png';
import { Row, Col } from 'antd';
function Advantages() {
  return (
    <div className="_advantages">
      <h1 className="_session-title">LỢI THẾ</h1>
      <img style={{ width: '150px', height: '10px' }}  alt='' src={line} />
      <Row className="_advantages-row">
        <Col span={12}>
          <ul>
            <p> Các loại hình dịch vụ</p>
            <li>Cho thuê mặt bằng diện tích linh hoạt</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Col>
        <Col span={12}>
          <p> Hỗ trợ doanh nghiệp</p>
        </Col>
      </Row>
    </div>
  )
}

export default Advantages