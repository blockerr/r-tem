import React from 'react'
import './login.css'
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import auth from '../../helpers/auth'

function Login() {
  const history = useHistory()

  const onFinish = (values) => {
    try {
      auth.login(values);
      setTimeout(() => {
        history.push('/admin/home');
      }, 500);
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div style={{ height: '100vh' }}>
      <Row className='_login'>
        <Col span={14} className="_col-background-login">
          <h1>Login form</h1>
        </Col>
        <Col span={10} className="_col-login">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
              hasFeedback
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="/#">
                Forgot password
        </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
        </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
export default Login 