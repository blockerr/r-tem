import React, { useState, useEffect } from 'react'
import './investor.css'
import { Table, Drawer, DatePicker, Form, Button, Col, Row, Input, Select, Space, Popconfirm, Upload, Avatar, Modal, Tag } from 'antd';
import { getInvestors, updateAvatar, createInvestor, deleteInvestor, getInvestor, updateInvestor } from '../../../services/investor';
import { getLots } from '../../../services/lot';
import { errorNotification, successNotification } from '../../../util/notification';
import { beforeUpload, getBase64 } from '../../../util/handleImage';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import { IMAGE_URL } from '../../../constant'
import moment from 'moment';
const { Option } = Select;
const { Column } = Table;

function Investor() {
  const [investors, setInvestors] = useState([]);
  const [state, setState] = useState({ visibleCreate: false, visibleUpdate: false, isUpdate: false })
  const [investor, setInvestor] = useState({})
  const [file, setFile] = useState({ imageUrl: null, fileImg: {} })
  const [modal, setModal] = useState({ visibleModal: false })
  const [lots, setLots] = useState([])


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


  const getListLot = () => {
    getLots()
      .then(res => {
        const list = [];
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].investor == null) {
            list.push(res.data[i]);
          }
        }
        setLots(list)
      })
      .catch(err => errorNotification('topLeft', err.response.data))
  }

  const showDrawerUpdate = (id) => {
    setState({
      visibleUpdate: true,
      isUpdate: true
    });
    getEmpl(id)
  };



  const getEmpl = (id) => {
    getInvestor(id)
      .then(res => {
        setInvestor(res.data);
      })
      .catch(err => console.log(err.response))
  }

  const onCreate = values => {
    createInvestor(values)
      .then(res => {
        successNotification('topLeft');
        form.resetFields();
        getListInvesto()
      })
      .catch(err => {
        errorNotification('topLeft', err.response.data)
      })
  };

  const getListInvesto = () => {
    getInvestors()
      .then(res => { setInvestors(res.data) })
      .catch(err => errorNotification('topLeft', err.response.data))
  }

  const onDelete = (id) => {
    deleteInvestor(id)
      .then(res => { successNotification('topLeft'); getListInvesto() })
      .catch(err => errorNotification('topLeft', err.response.data))
  }

  const onUpdate = (e) => {
    updateInvestor(investor.investor_id, e)
      .then(res => { successNotification('topLeft'); getListInvesto() })
      .catch(err => errorNotification('topLeft', err.response.data))
  }

  const onUpdateAvatar = () => {
    const formData = new FormData();
    formData.append('avatar', file.fileImg);
    updateAvatar(investor.investor_id, formData)
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
    getListInvesto()
    getListLot()
    if (state.isUpdate === true) {
      formUpdate.setFieldsValue({
        companyName: investor.companyName,
        email: investor.email,
        phone: investor.phone,
        lot_id: investor.lot_id,
        representative: investor.representative,
        description: investor.description,
        hire_date: moment(investor.hire_date),
        expire_date: moment(investor.expire_date),
        address: investor.address,
        avatar: investor.avatar,
        // create_at: investor.create_at,
        // update_at: investor.update_at
      })
    }
  }, [investor, state.isUpdate, formUpdate]);

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
        <h1 style={{ display: 'inline' }}>Nhà đầu tư</h1>
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


      <Table dataSource={investors} rowKey={() => investors.map(e => e.invesstor_id)} pagination={{ pageSize: 10 }}  >
        <Column title="Tên công ty" dataIndex="companyName" key="companyName"
          render={companyName => (
            <>
              <span className="_admin-username">{companyName}</span>
            </>
          )}
        />
        <Column title="Lô số" dataIndex="lot_id" key="lot_id" 
           render={lot_id => (
            <>
              <Tag color="blue" key={lot_id}>
                {lot_id}
              </Tag>
            </>
          )}
        />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Số điện thoại" dataIndex="phone" key="phone" />
        <Column title="Người đại diện" dataIndex="representative" key="representative" />
        <Column title="Ngày hết hợp đồng" dataIndex="expire_date" key="expire_date" />

        <Column
          title="Action"
          key="action"
          render={(record) => (
            <Space size="middle">
              <i className="fa fa-pencil-square _icon-edit" onClick={() => { showDrawerUpdate(record.investor_id) }} aria-hidden="true"></i>
              <Popconfirm
                title="Bạn có chắc muốn xóa ?"
                onConfirm={() => onDelete(record.investor_id)}
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
        title="Tạo nhà đầu tư"
        width={720}
        onClose={onClose}
        visible={state.visibleCreate}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" hideRequiredMark onFinish={onCreate} form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="companyName"
                label="Tên công ty"
                rules={[{ required: true, message: 'Vui lòng điền tên công ty' }]}
              >
                <Input placeholder="Vui lòng điền tên công ty" />
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
                name="lot_id"
                label="Chọn lô"
                rules={[{ required: true, message: 'Vui lòng chọn lô' }]}
              >
                <Select placeholder="Vui lòng chọn lô">
                  {lots.map(lot => <Option value={lot.lot_id} key={lot.lot_id}>{lot.lotNumber}</Option>)}
                  {/* <Option value="Nam">ád</Option>  */}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="representative"
                label="Người đại diện"
                rules={[{ required: true, message: 'Vui lòng điền tên người đại diện' }]}
              >
                <Input placeholder="Vui lòng điền tên người đại diện" />
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
                name="hire_date"
                label="Ngày kí hợp đồng"
                rules={[{ required: true, message: 'Vui lòng chọn ngày kí hợp đồng' }]}
              >
                <DatePicker style={{ width: '98%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="expire_date"
                label="Ngày hết hạn"
                rules={[{ required: true, message: 'Vui lòng chọn ngày kí hợp đồng' }]}
              >
                <DatePicker style={{ width: '98%' }} />
              </Form.Item>
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
        title="Cập nhập"
        width={720}
        onClose={onClose}
        visible={state.visibleUpdate}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Row gutter={16}>
          <Col span={12}>
            {investor.avatar != null ? <img src={`${IMAGE_URL}/${investor.avatar}`} alt="avatar" style={{ width: '100px', height: '100px', clear: 'both' }} /> : noAvatar}
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
                name="companyName"
                label="Tên công ty"
                rules={[{ required: true, message: 'Vui lòng điền tên công ty' }]}
              >
                <Input placeholder='Vui lòng điền tên công ty' />
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
                name="lot_id"
                label="Chọn lô"
                rules={[{ required: true, message: 'Vui lòng chọn lô' }]}
              >
                <Select placeholder="Vui lòng chọn lô">
                  {lots.map(lot => <Option value={lot.lot_id} key={lot.lot_id}>{lot.lotNumber}</Option>)}
                  {/* <Option value="Nam">ád</Option>  */}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="representative"
                label="Người đại diện"
                rules={[{ required: true, message: 'Vui lòng điền tên người đại diện' }]}
              >
                <Input placeholder="Vui lòng điền tên người đại diện" />
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
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="hire_date"
                label="Ngày kí hợp đồng"
                rules={[{ required: true, message: 'Vui lòng chọn ngày kí hợp đồng' }]}
              >
                <DatePicker style={{ width: '98%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="expire_date"
                label="Ngày hết hạn"
                rules={[{ required: true, message: 'Vui lòng chọn ngày kí hợp đồng' }]}
              >
                <DatePicker style={{ width: '98%' }} />
              </Form.Item>
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

export default Investor 