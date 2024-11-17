"use client";
import React, { useState } from 'react';
import {Button, Form, Input, Modal} from 'antd';
import {doCreateUser} from "@/redux/actions/users";
import {useDispatch, useSelector} from "react-redux";

const AddUserModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.users.loading);

  console.log("Loading", loading);
  console.log("Name", name);
  console.log("Date of Birth", dateOfBirth);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch(doCreateUser({name, dateOfBirth})).then(() => {
      setIsModalOpen(false);
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
      <>
        <Button type="primary" onClick={showModal}>
          Add User
        </Button>
        <Modal title="Add User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} loading={loading}>
          <div style={{marginTop: '15px'}}>
            <Form
                name="basic"
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
            >
              <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
              >
                <Input onChange={(e) => setName(e.target.value)} />
              </Form.Item>

              <Form.Item
                  label="Date of Birth"
                  name="date_of_birth"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your date of birth!',
                    },
                  ]}
              >
                <Input onChange={(e) => setDateOfBirth(e.target.value)}/>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </>
  );
};
export default AddUserModal;