import React from 'react'
import './services.css'
import line from '../../../assets/line.png';
import { Row, Col, Card } from 'antd';

function Services() {
  return (
    <div className="_services">
      <h1 className="_session-title">DỊCH VỤ TIỆN ÍCH</h1>
      <img style={{ width: '150px', height: '10px' }} src={line} alt="" />
      
      <Row className="_services-row">
        <Col className="_services-col" span={6}>
          <Card className="_services-card" title="MẶT BẰNG LINH HOẠT" bordered={false} style={{ width: 300 }}>
            <p>Warehouse hiện đang sở hữu hệ thống kho bãi chất lượng cao với tổng diện tíc mặt bằng hơn 10.000 m2. Vị trí thuận lợi cho việc lưu trữ và phân phối, vận chuyển, vận tải hàng hóa vào khu vực TP. Hồ Chí Minh </p>
          </Card>
        </Col>
        <Col className="_services-col" span={6}>
          <Card className="_services-card" title="HỆ THỐNG KỸ THUẬT" bordered={false} style={{ width: 300 }}>
            <p>Toàn bộ kho bãi xây dựng hiện đại, đã được kiểm định, đặt tiêu chuẩn quốc tế. Có thể lưu trữ nhiều loại hàng hóa khác nhau.</p>
          </Card>
        </Col>
        <Col className="_services-col" span={6}>
          <Card className="_services-card" title="HỆ THỐNG ĐIỆN" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
          </Card>
        </Col>
        <Col className="_services-col" span={6}>
          <Card className="_services-card" title="AN NINH" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
      
    </div>
  )
}

export default Services