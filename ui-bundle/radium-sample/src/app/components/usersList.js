"use client";

import {useEffect} from "react";
import {doGetUsers, getUsersSuccess} from "@/redux/actions/users";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "@/redux/reducer/users";
import {fetchUsers} from "@/redux/api/users";
import {useAppDispatch} from "@/redux/hooks";
import {Flex, Layout, Space, Table} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Header} from "antd/es/layout/layout";
import {Footer} from "antd/es/modal/shared";

export const UsersList = () => {
  const dispatch = useAppDispatch();

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
      render: (_) => (
          <Space size="middle">
            <a onClick={() => {}}>Edit</a>
            <a onClick={() => {}}>Delete</a>
          </Space>
      ),
    },
  ];

  return (
      <Table columns={columns} loading={usersLoading} dataSource={users} />
  );
}