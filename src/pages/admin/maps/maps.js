import React from 'react'
import './maps.css'
import maps from '../../../assets/map.jpg'
import { Col, Row } from 'antd';

function Maps() {
  return (
    <div className="_map-container">
    <h1 style={{textAlign: 'center'}}>Sơ đồ phân lô</h1>
      <Row>
        <Col span={12}>
        <i className="fa fa-square _lent" aria-hidden="true"></i> Đã thuê<br/>
        <i className="fa fa-square _nolent" aria-hidden="true"></i> Chưa thuê<br/>
        <i className="fa fa-square _near-expire" aria-hidden="true"></i> Sắp hết hạn<br/>
        </Col>
        <Col className="_map-image-box" span={12}>
          <img src={maps} alt="" />
        </Col>
      </Row>
    </div>
  )
}

export default Maps 