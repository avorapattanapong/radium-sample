import {UsersList} from "@/app/components/usersList";
import {Content} from "antd/es/layout/layout";
import React from 'react';
import AddUserModal from "@/app/components/addUserModal";

export default function Home() {

  return (
    <div>
      <h1 style={{fontSize: "25pt", fontWeight: "500", margin: "25px 50px"}}>Users Management System</h1>
      <div style={{margin: "0 50px 25px 50px"}}>
        <AddUserModal />
      </div>
      <Content
          style={{
            padding: '0 48px',
          }}
      >
        <div
            style={{
              background: "#fff",
              minHeight: 280,
              padding: 24,
              borderRadius: "5px",
            }}
        >
          <UsersList />
        </div>
      </Content>

    </div>
  );
}
