import React, { useState, useEffect } from 'react'
import './employee.css'
import { Table, Drawer, DatePicker, Form, Button, Col, Row, Input, Select, Tag, Space, Popconfirm, Upload, Avatar, Modal } from 'antd';
import { getEmployees, createEmployee, deleteEmployee, updateEmployee, getEmployee, updateAvatar } from '../../../services/employee';
import { errorNotification, successNotification } from '../../../util/notification';
import { beforeUpload, getBase64 } from '../../../util/handleImage';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import { IMAGE_URL } from '../../../constant'
import moment from 'moment';
const { Option } = Select;
const { Column } = Table;

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [state, setState] = useState({ visibleCreate: false, visibleUpdate: false, isUpdate: false })
  const [empl, setEmpl] = useState({})
  const [file, setFile] = useState({ imageUrl: null, fileImg: {} })
  const [modal, setModal] = useState({ visibleModal: false })

  const [form] = Form.useForm();
  const [formUpdate] = Form.useForm();

  const showImageChange = info => {
    getBase64(info.file.originFileObj, imageUrl => {
      setFile({
        imageUrl: imageUrl,
        fileImg: info.file.originFileObj
      })
    }
    );
  };

  const showDrawerCreate = () => {
    setState({
      visibleCreate: true,
    });
  };

  const onClose = () => {
    setState({
      visibleCreate: false,
    });
  };

  const showModel = () => {
    setModal({ visibleModal: true })
  }




  const showDrawerUpdate = (id) => {
    setState({
      visibleUpdate: true,
      isUpdate: true
    });
    getEmpl(id)
  };



  const getEmpl = (id) => {
    getEmployee(id)
      .then(res => {
        setEmpl(res.data);
      })
      .catch(err => console.log(err.response))
  }

  const onCreate = values => {
    createEmployee(values)
      .then(res => {
        successNotification('topLeft');
        form.resetFields();
        getList()
      })
      .catch(err => {
        errorNotification('topLeft', err.response.data)
      })
  };

  const getList = () => {
    getEmployees()
      .then(res => { setEmployees(res.data) })
      .catch(err => errorNotification('topLeft', err.response.data))
  }

  const onDelete = (id) => {
    deleteEmployee(id)
      .then(res => { successNotification('topLeft'); getList() })
      .catch(err => errorNotification('topLeft', err.response.data))
  }

  const onUpdate = (e) => {
    updateEmployee(empl.admin_id, e)
      .then(res => { successNotification('topLeft'); getList() })
      .catch(err => errorNotification('topLeft', err.response.data))
  }

  const onUpdateAvatar = () => {
    const formData = new FormData();
    formData.append('avatar', file.fileImg);
    updateAvatar(empl.admin_id, formData)
      .then(res => successNotification('topLeft'))
      .catch(err => errorNotification('topLeft', err.response.data))
    setModal({ visibleModal: false })
    setFile({ imageUrl: null })
    setState({ visibleUpdate: false })
  }

  const cancel = () => { }

  const modalCancel = () => {
    setModal({ visibleModal: false })
  }

  useEffect(() => {
    getList()
    if (state.isUpdate === true) {
      formUpdate.setFieldsValue({
        username: empl.username,
        email: empl.email,
        sex: empl.sex,
        phone: empl.phone,
        birthday: moment(empl.birthday),
        address: empl.address,
        avatar: empl.avatar,
        // create_at: empl.create_at,
        // update_at: empl.update_at
      })
    }
  }, [empl, state.isUpdate, formUpdate]);

  const noAvatar = (
    <div>
      <Avatar shape="square" size={100} icon={<UserOutlined />} />
    </div>
  );

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Vui lòng click chọn ảnh đại diện mới</div>
    </div>
  );

  return (
    <div className="_empl-container">
      <div className="_emp-header">
        <h1 style={{ display: 'inline' }}>Nhân viên</h1>
        <Button style={{ float: 'right', backgroundColor: 'rgba(10,148,153,1)' }} type="primary" onClick={showDrawerCreate}>
          <i className="fa fa-plus _menu-icon" aria-hidden="true"> </i> Tạo mới
        </Button>
      </div>

      <Modal
        title="Cập nhập ảnh đại diện"
        visible={modal.visibleModal}
        footer={false}
        onCancel={modalCancel}
      >
        <Form layout="vertical" hideRequiredMark onFinish={onUpdateAvatar}>
          <Form.Item
            name="avatar"
            label=""
            className="_admin-avatar"
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={showImageChange}
              fileList={false}
            >
              {file.imageUrl ? <img src={file.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>

          </Form.Item>
          {
            file.imageUrl == null ? <Button type="primary" disabled style={{ marginBottom: '24px', marginTop: '10px', float: 'right' }} htmlType="submit">
              Thay đổi ảnh
              </Button> : <Button type="primary" style={{ marginBottom: '24px', marginTop: '10px', float: 'right', backgroundColor: 'rgba(10,148,153,1)' }} htmlType="submit">
                Thay đổi ảnh
              </Button>
          }

        </Form>
      </Modal>


      <Table dataSource={employees} rowKey={() => employees.map(e => e.admin_id)} pagination={{ pageSize: 10 }}  >
        <Column title="Tên đăng nhập" dataIndex="username" key="username"
          render={username => (
            <>
              <span className="_admin-username">{username}</span>
            </>
          )}
        />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Giới tính" dataIndex="sex" key="sex" />
        <Column title="Ngày sinh" dataIndex="birthday" key="birthday" />
        <Column title="Số điện thoại" dataIndex="phone" key="phone" />
        <Column title="Vị trí" dataIndex="role" key="role"
          render={role => (
            <>
              <Tag color="blue" key={role}>
                {role}
              </Tag>
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(record) => (
            <Space size="middle">
              <i className="fa fa-pencil-square _icon-edit" onClick={() => { showDrawerUpdate(record.admin_id) }} aria-hidden="true"></i>
              <Popconfirm
                title="Bạn có chắc muốn xóa ?"
                onConfirm={() => onDelete(record.admin_id)}
                onCancel={cancel}
                okText="Xóa"
                cancelText="Hủy">
                <i className="fa fa-trash _icon-delete" aria-hidden="true"></i>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>

      {/* Draw create form */}
      <Drawer
        title="Tạo mới tài khoản"
        width={720}
        onClose={onClose}
        visible={state.visibleCreate}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" hideRequiredMark onFinish={onCreate} form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="username"
                label="Tên đăng nhập"
                rules={[{ required: true, message: 'Vui lòng điền tên đăng nhập' }]}
              >
                <Input placeholder="Vui lòng điền tên đăng nhập" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Vui lòng điền email' }]}
              >
                <Input placeholder="Vui lòng điền email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[{ required: true, message: 'Vui lòng điền số điện thoại' }]}
              >
                <Input placeholder="Vui lòng điền số điện thoại" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="sex"
                label="Giới tính"
                rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}
              >
                <Select placeholder="Vui lòng chọn giới tính">
                  <Option value="Nam">Nam</Option>
                  <Option value="Nữ">Nữ</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[{ required: true, message: 'Vui lòng điền mật khẩu' }]}
              >
                <Input.Password placeholder="Vui lòng điền mật khẩu" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="address"
                label="Địa chỉ"
                rules={[{ required: true, message: 'Vui lòng điền địa chỉ' }]}
              >
                <Input placeholder="Vui lòng điền địa chỉ" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="birthday"
                label="Ngày sinh"
                rules={[{ required: true, message: 'Vui lòng điền ngày sinh' }]}
              >
                <DatePicker style={{ width: '98%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>

            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Mô tả"
              // rules={[{ required: true, message: 'Vui lòng mô tả' }]}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Button onClick={() => form.resetFields()} >Reret</Button>
              <Button type="primary" style={{ float: 'right', backgroundColor: 'rgba(10,148,153,1)' }} htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Drawer>

      {/* //////////////////////////////////////////////////// */}

      <Drawer
        title="Cập nhập tài khoản"
        width={720}
        onClose={onClose}
        visible={state.visibleUpdate}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Row gutter={16}>
          <Col span={12}>
            {empl.avatar != null ? <img src={`${IMAGE_URL}/${empl.avatar}`} alt="avatar" style={{ width: '100px', height: '100px', clear: 'both' }} /> : noAvatar}
          </Col>
          <Col span={12}>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Button type="primary" style={{ float: 'left', backgroundColor: 'rgba(10,148,153,1)', width: '100px' }} onClick={showModel} htmlType="submit">
              Đổi ảnh
            </Button>
          </Col>
        </Row>
        <Form layout="vertical" hideRequiredMark onFinish={onUpdate} form={formUpdate}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="username"
                label="Tên đăng nhập"
                rules={[{ required: true, message: 'Vui lòng điền tên đăng nhập' }]}
              >
                <Input placeholder='Vui lòng điền tên đăng nhập' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Vui lòng điền email' }]}
              >
                <Input placeholder='Vui lòng điền email' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[{ required: true, message: 'Vui lòng điền số điện thoại' }]}
              >
                <Input placeholder='Vui lòng điền số điện thoại' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="sex"
                label="Giới tính"
                rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}
              >
                <Select placeholder='Vui lòng chọn giới tính'>
                  <Option value="Nam">Nam</Option>
                  <Option value="Nữ">Nữ</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="birthday"
                label="Ngày sinh"
                rules={[{ required: true, message: 'Vui lòng điền ngày sinh' }]}
              >
                <DatePicker style={{ width: '100%' }} />
                {/* <Input placeholder='Vui lòng điền ngày sinh' /> */}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="address"
                label="Địa chỉ"
                rules={[{ required: true, message: 'Vui lòng điền địa chỉ' }]}
              >
                <Input placeholder='Vui lòng điền địa chỉ' />
              </Form.Item>
            </Col>
          </Row>
          {/* <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="create_at"
                label="Ngày tạo"
              >
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="update_at"
                label="Ngày cập nhập"
              >
                <Input disabled />
              </Form.Item>
            </Col>
          </Row> */}
          <Row>
            <Col span={24}>
              <Button onClick={() => formUpdate.resetFields()} >Reret</Button>
              <Button type="primary" style={{ float: 'right', backgroundColor: 'rgba(10,148,153,1)' }} htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  )
}

export default Employee 