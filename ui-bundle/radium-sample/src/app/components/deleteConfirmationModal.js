"use client";
import React, { useState } from 'react';
import {Button, Form, Input, Modal} from 'antd';
import {doCreateUser, doDeleteUser, doGetUsers} from "@/redux/actions/users";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserById} from "@/redux/api/users";

const DeleteUserModal = ({isModalOpen, setIsModalOpen}) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.users.loading);
  const selectedUser = useSelector(state => state.ui.selectedUser);

  const handleOk = () => {
    dispatch(doDeleteUser(selectedUser.id)).then(() => {
      setIsModalOpen(false);
      doGetUsers();
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
      <>
        <Modal title="Confirm Delete User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} loading={loading}>
          <p>Are you sure you want to delete {selectedUser?.name}?</p>
        </Modal>
      </>
  );
};
export default DeleteUserModal;