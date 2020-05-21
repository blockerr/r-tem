import React from 'react';
import './camera.css';
import { Row } from 'antd';
// import ReactPlayer from 'react-player';
function Camera() {
  return (
    <div>
      <h1>Camera</h1>
      {/* <Row className="_camera-row" gutter={16}>
        <Col className="_camera-col" span={4}>
          <strong>Camera số 1</strong>
        </Col>
        <Col span={20}>
          <ReactPlayer loop controls width="100%" url='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' playing />
        </Col>
      </Row>
      <Row className="_camera-row" gutter={16}>
        <Col className="_camera-col" span={4}>
          <strong>Camera số 2</strong>
        </Col>
        <Col span={20}>
          <ReactPlayer loop controls width="100%" url='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' playing />
        </Col>
      </Row> */}
      <Row gutter={16}>
        {/* <div className="_camera-container">
          <ReactPlayer loop controls width="100%" url='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' playing />
        </div>
        <div className="_camera-container">
          <ReactPlayer loop controls width="100%" url='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' playing />
        </div>
        <div className="_camera-container">
          <ReactPlayer loop controls width="100%" url='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' playing />
        </div>
        <div className="_camera-container">
          <ReactPlayer loop controls width="100%" url='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' playing />
        </div>
        <div className="_camera-container">
          <ReactPlayer loop controls width="100%" url='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' playing />
        </div>
        <div className="_camera-container">
          <ReactPlayer loop controls width="100%" url='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' playing />
        </div>
        <div className="_camera-container">
          <ReactPlayer loop controls width="100%" url='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' playing />
        </div> */}
      </Row>
    </div>
  )
}

export default Camera 