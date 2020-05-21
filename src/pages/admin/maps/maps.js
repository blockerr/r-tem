import React, { useEffect, useState } from 'react';
import { errorNotification } from '../../../util/notification';
import { IMAGE_URL } from '../../../constant'
import { List, Avatar, Row, Col } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './maps.css';
import maps from '../../../assets/map.jpg';
import { getLots } from '../../../services/lot';
import { getInvestors } from '../../../services/investor';
import { coord } from './coordinates';
import { cod } from './cod';

var moment = require('moment');
// import inside from 'point-in-polygon';
function Maps() {
  // const [loading, setLoading] = useState({ isLoading: true })

  const [lots, setLots] = useState([])
  const [investors, setInvestors] = useState([])
  const maxW = 500
  const maxH = 600
  const showMap = (ctx, c) => {
    const listLot = lots;

    var img = new Image();
    img.src = maps;
    img.onload = () => {
      var iw = img.width;
      var ih = img.height;
      var scale = Math.min((maxW / iw), (maxH / ih));
      var iwScaled = iw * scale;
      var ihScaled = ih * scale;
      c.width = iwScaled
      c.height = ihScaled
      ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
      // ctx.fillStyle = "red";
      ctx.lineWidth = 1;
      const listCoordinate = coord()

      for (let i = 0; i < listCoordinate.length; i++) {
        if (listCoordinate[i].length === 6) {
          for (let j = 0; j < listLot.length; j++) {
            if (listCoordinate[i][5].lotNumber === listLot[j].lotNumber && listLot[j].investor != null) {
              let hireDate = moment(listLot[j].investor.hire_date);
              let expDate = moment(listLot[j].investor.expire_date);
              let countDate = expDate.diff(hireDate, 'days')
              console.log(countDate)
              if (countDate <= 5) {
                ctx.beginPath();
                ctx.fillStyle = "orange";
                ctx.moveTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
                ctx.lineTo(listCoordinate[i][1].x, listCoordinate[i][1].y);
                ctx.lineTo(listCoordinate[i][2].x, listCoordinate[i][2].y);
                ctx.lineTo(listCoordinate[i][3].x, listCoordinate[i][3].y);
                ctx.lineTo(listCoordinate[i][4].x, listCoordinate[i][4].y);
                ctx.lineTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
                ctx.fill()
                ctx.closePath();
                break
              }
              if (countDate >= 5) {
                ctx.beginPath();
                ctx.fillStyle = "red";
                ctx.moveTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
                ctx.lineTo(listCoordinate[i][1].x, listCoordinate[i][1].y);
                ctx.lineTo(listCoordinate[i][2].x, listCoordinate[i][2].y);
                ctx.lineTo(listCoordinate[i][3].x, listCoordinate[i][3].y);
                ctx.lineTo(listCoordinate[i][4].x, listCoordinate[i][4].y);
                ctx.lineTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
                ctx.fill()
                ctx.closePath();
                break
              }
            }
            if (listCoordinate[i][5].lotNumber !== listLot[j].lotNumber && listLot[j].investor != null) {
              ctx.beginPath();
              ctx.fillStyle = "green";
              ctx.moveTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
              ctx.lineTo(listCoordinate[i][1].x, listCoordinate[i][1].y);
              ctx.lineTo(listCoordinate[i][2].x, listCoordinate[i][2].y);
              ctx.lineTo(listCoordinate[i][3].x, listCoordinate[i][3].y);
              ctx.lineTo(listCoordinate[i][4].x, listCoordinate[i][4].y);
              ctx.lineTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
              ctx.fill()
              ctx.closePath();
            }
          }
        } else {
          // const isInrect = (listCoordinate[i][0])
          for (let j = 0; j < listLot.length; j++) {
            if (listCoordinate[i][4].lotNumber === listLot[j].lotNumber && listLot[j].investor != null) {
              let hireDate = moment(listLot[j].investor.hire_date);
              let expDate = moment(listLot[j].investor.expire_date);
              let countDate = expDate.diff(hireDate, 'days')
              if (countDate <= 5) {
                ctx.beginPath();
                ctx.fillStyle = "orange";
                ctx.moveTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
                ctx.lineTo(listCoordinate[i][1].x, listCoordinate[i][1].y);
                ctx.lineTo(listCoordinate[i][2].x, listCoordinate[i][2].y);
                ctx.lineTo(listCoordinate[i][3].x, listCoordinate[i][3].y);
                ctx.lineTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
                ctx.fill()
                ctx.closePath();
                break
              }
              if (countDate >= 5) {
                ctx.beginPath();
                ctx.fillStyle = "red";
                ctx.moveTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
                ctx.lineTo(listCoordinate[i][1].x, listCoordinate[i][1].y);
                ctx.lineTo(listCoordinate[i][2].x, listCoordinate[i][2].y);
                ctx.lineTo(listCoordinate[i][3].x, listCoordinate[i][3].y);
                ctx.lineTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
                ctx.fill()
                ctx.closePath();
                break
              }
            }
            if (listCoordinate[i][4].lotNumber !== listLot[j].lotNumber && listLot[j].investor != null) {
              ctx.beginPath();
              ctx.fillStyle = "green";
              ctx.moveTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
              ctx.lineTo(listCoordinate[i][1].x, listCoordinate[i][1].y);
              ctx.lineTo(listCoordinate[i][2].x, listCoordinate[i][2].y);
              ctx.lineTo(listCoordinate[i][3].x, listCoordinate[i][3].y);
              ctx.lineTo(listCoordinate[i][0].x, listCoordinate[i][0].y);
              ctx.fill()
              ctx.closePath();
            }
          }
        }

      }

      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(230, 399, 12, 0, Math.PI * 2, true)
      ctx.fill();
      ctx.closePath();

      const listCoordNoNumber = cod();
      for (let i = 0; i < listCoordNoNumber.length; i++) {
        const centroit = get_polygon_centroid(listCoordNoNumber[i][0])
        ctx.beginPath();
        ctx.font = "15px Arial";
        ctx.fillText(listCoordNoNumber[i][1][0].lotNumber, centroit.x, centroit.y);
        ctx.closePath();
      }

    }
  }

  const get_polygon_centroid = (pts) => {
    var first = pts[0], last = pts[pts.length - 1];
    if (first.x !== last.x || first.y !== last.y) pts.push(first);
    var twicearea = 0,
      x = 0, y = 0,
      nPts = pts.length,
      p1, p2, f;
    for (var i = 0, j = nPts - 1; i < nPts; j = i++) {
      p1 = pts[i]; p2 = pts[j];
      f = (p1.y - first.y) * (p2.x - first.x) - (p2.y - first.y) * (p1.x - first.x);
      twicearea += f;
      x += (p1.x + p2.x - 2 * first.x) * f;
      y += (p1.y + p2.y - 2 * first.y) * f;
    }
    f = twicearea * 3;
    return { x: x / f + first.x, y: y / f + first.y };
  }

  const getListInvestor = () => {
    getInvestors()
      .then(res => {
        setInvestors(res.data);
        // setLoading({ isLoading: false });
      })
      .catch(err => errorNotification('topLeft', err.response.data))
  }

  const getListLot = () => {
    getLots()
      .then(res => {
        setLots(res.data);
        // setLoading({ isLoading: false });
      })
      .catch(err => errorNotification('topLeft', err.response.data))
  }

  useEffect(() => {
    getListLot()
    getListInvestor()
    // mouseClick(c)
  }, [])

  useEffect(() => {
    const c = document.getElementById("map");
    const ctx = c.getContext("2d");
    showMap(ctx, c)
  })

  return (
    <div className="_map">
      <h1>Sơ đồ phân lồ</h1>
      <Row>
        <Col span={6}>
          <i className="fa fa-square _lent" aria-hidden="true"></i> Đã thuê<br />
          <i className="fa fa-square _nolent" aria-hidden="true"></i> Chưa thuê<br />
          <i className="fa fa-square _near-expire" aria-hidden="true"></i> Sắp hết hạn<br />
        </Col>
        <Col span={12}>
          <canvas id="map" style={{ width: "500px", height: "600px"}}></canvas>

        </Col>
        <Col span={6}>
          {
            lots != null ?
              <List
                itemLayout="horizontal"
                dataSource={investors}
                renderItem={investor => (
                  <List.Item>
                    {
                      investor.avatar != null ?
                        <List.Item.Meta
                          avatar={<Avatar src={`${IMAGE_URL}/${investor.avatar}`} />}
                          title={<a href="https://ant.design">{investor.lot_id} - {investor.companyName}</a>}
                          description={<p>Địa chỉ: {investor.address}</p>}
                        /> : <List.Item.Meta
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={<a href="http://localhost:4200/admin/map">{investor.lot_id} - {investor.companyName}</a>}
                          description={<p>Địa chỉ: {investor.address}</p>}
                        />

                    }
                  </List.Item>
                )}
              /> : <h1>Hello</h1>
          }
        </Col>
      </Row>
    </div>

  )
}

export default Maps 