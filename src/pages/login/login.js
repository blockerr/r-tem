import React from 'react'
import './login.css'
// import { Row, Col, Form, Input, Button, Checkbox } from 'antd';

function Login() {
  // const onFinish = values => {
  //   console.log('Success:', values);
  // };

  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo);
  // };
  return (
    <div style={{ height: '100vh' }}>
      {/* <Row className='_login'>
        <Col span={14} style={{ backgroundColor: 'red' }}>col-12</Col>
        <Col span={10} className="_col-login"> */}
          {/* <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item  name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
        </Button>
            </Form.Item>
          </Form> */}
        {/* </Col>
      </Row> */}
    </div>
  )
}
export default Login 