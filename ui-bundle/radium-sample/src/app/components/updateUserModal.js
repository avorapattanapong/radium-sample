"use client";
import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Modal} from 'antd';
import {doCreateUser, doUpdateUser} from "@/redux/actions/users";
import {useDispatch, useSelector} from "react-redux";

const UpdateUserModal = ({isModalOpen, setIsModalOpen}) => {
  const selectedUser = useSelector(state => state.ui.selectedUser);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.users.loading);
  const [name, setName] = useState(selectedUser?.name);
  const [dateOfBirth, setDateOfBirth] = useState(selectedUser?.dateOfBirth);

  useEffect(() => {
    setName(selectedUser?.name);
    setDateOfBirth(selectedUser?.dateOfBirth);
  }, selectedUser);

  const handleOk = () => {
    dispatch(doUpdateUser({id:selectedUser?.id, name, dateOfBirth})).then(() => {
      setIsModalOpen(false);
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
      <>
        <Modal title="Edit User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} loading={loading}>
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
                <Input value={selectedUser?.name} onChange={(e) => setName(e.target.value)} />
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
                <Input value={selectedUser?.dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </>
  );
};
export default UpdateUserModal;