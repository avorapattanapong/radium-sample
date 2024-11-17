"use client";

import {useEffect, useState} from "react";
import {doGetUsers, getUsersSuccess} from "@/redux/actions/users";
import {useSelector} from "react-redux";
import {useAppDispatch} from "@/redux/hooks";
import {Space, Table} from "antd";
import {selectUser} from "@/redux/reducer/ui";
import DeleteConfirmationModal from "@/app/components/deleteConfirmationModal";
import UpdateUserModal from "@/app/components/updateUserModal";

export const UsersList = () => {
  const dispatch = useAppDispatch();
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);
  const [isUpdateUserModalOpen, setIsUpdateUserModalOpen] = useState(false);

  useEffect(() => {
    dispatch(doGetUsers());
  }, []);
  const users = useSelector(state => state.users.users);
  const usersLoading = useSelector(state => state.users.loading);
  console.log(users);
  console.log(usersLoading);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Date of Birth',
      dataIndex: 'date_of_birth',
      key: 'date_of_birth',
    },
    {
      title: 'Create On',
      key: 'created_on',
      dataIndex: 'created_on'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, user) => (
          <Space size="middle">
            <a onClick={() => {
              dispatch(selectUser(user));
              setIsUpdateUserModalOpen(true);
            }}>Edit</a>
            <a onClick={() => {
              dispatch(selectUser(user));
              setIsDeleteConfirmationModalOpen(true);
            }}>Delete</a>
          </Space>
      ),
    },
  ];

  return (
      <>
        <UpdateUserModal isModalOpen={isUpdateUserModalOpen} setIsModalOpen={setIsUpdateUserModalOpen} />
        <DeleteConfirmationModal isModalOpen={isDeleteConfirmationModalOpen} setIsModalOpen={setIsDeleteConfirmationModalOpen} />
        <Table columns={columns} loading={usersLoading} dataSource={users} />
      </>

  );
}