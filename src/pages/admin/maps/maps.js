import React, { useEffect } from 'react'
import './maps.css'
import maps from '../../../assets/map.jpg'

function Maps() {

  const maxW = 500
  const maxH = 600

  const showMap = (ctx,c) => {
    var img = new Image();
    img.src = maps;
    img.onload = () => {
      var iw=img.width;
      var ih=img.height;
      var scale=Math.min((maxW/iw),(maxH/ih));
      var iwScaled=iw*scale;
      var ihScaled=ih*scale;
      c.width = iwScaled
      c.height = ihScaled
      ctx.drawImage(img,0,0,iwScaled,ihScaled);
    }
  }

  const getCoordinates = (c, evt) => {
    const rect = c.getBoundingClientRect();
    return  {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
  };
  }

  const mouseClick = (c) => {
    c.addEventListener("click", function (evt) {
      var mousePos = getCoordinates(c, evt);
      alert(mousePos.x + ',' + mousePos.y);
  }, false);
  }

  useEffect(() => {
    var c = document.getElementById("map");
    var ctx = c.getContext("2d");
    showMap(ctx,c)
    mouseClick(c)
  })

  return (
    <div className="_map">
      <div className="_map-container">
        <div className="_map-info">
          <i className="fa fa-square _lent" aria-hidden="true"></i> Đã thuê<br />
          <i className="fa fa-square _nolent" aria-hidden="true"></i> Chưa thuê<br />
          <i className="fa fa-square _near-expire" aria-hidden="true"></i> Sắp hết hạn<br />
        </div>
        <div>
          <canvas id="map" style={{ width: "500px", height: "600px", border: '1px solid' }}></canvas>
        </div>
      </div>
      <div className="_map-handle">
        <img src={maps} alt="" />
      </div>
    </div>

  )
}

export default Maps 