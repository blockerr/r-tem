import React from 'react'
import './footer.css'
import { Row } from 'antd'
import { Col } from 'antd'

function Footer() {
  return (
    <div className="_footer" >
      <Row>
        <Col span={8}>
          <h3 > Giới Thiệu </h3>
          <hr style={{border: '1px solid #f00'}} />​
          <p >Warehouse hiện đang sở hữu hệ thống kho bãi chất lượng cao với tổng diện tích mặt bằng hơn 10.000 m² vị trí thuận lợi cho việc lưu giữ và phân phối, vận chuyển, vận tải hàng hoá vào khu vực Thành Phố Hồ Chí Minh.</p>
          <p >Với tốc độ phát triển về mua sắm trực tuyến tại quận Tân Bình và các khu vực lân cận đã thách thức việc lưu trữ hàng hóa với các doanh nghiệp, cá nhân kinh doanh riêng.</p>

        </Col>
        <Col span={8}>
          <h3 > Thông Tin Liên Hệ </h3>
          <hr style={{border: '1px solid #f00'}} />​
          <p>CÔNG TY WAREHOUSE</p>
          <p>108 Tây Thạnh, quận Tân Phú, thành phố Hồ Chí Minh, Việt Nam</p>
          <p>Số Điện Thoại: 0707262959 - Fax: 0707262959</p>
          <p>Email: phuocloc_m@yahoo.com</p>
          </Col>
        <Col span={8}>
         <h3 > Mạng Xã Hội </h3>
         <hr style={{border: '1px solid #f00'}} />​
         <div className="fb-page" data-href="https://www.facebook.com/WHAMGM/" data-tabs="timeline" data-width="" data-height="225px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/WHAMGM/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/WHAMGM/">Warehousemanagement</a></blockquote></div>
        </Col>       
      </Row>
      <hr color="white"/>
      <p>Warehouse</p>
      {/* <p>2020 Developed By <a href="https://www.facebook.com/maiphuoc.loc.7">PhướcLộc</a></p> */}
    </div>
  )
}
export default Footer