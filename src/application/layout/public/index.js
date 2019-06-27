import React from "react";
import { Layout } from "antd";
import "./public.css";

const { Header, Content } = Layout;

const LayoutPublic = ({ header, content }) => (
  <Layout>
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="public-logo" />
      {header}
    </Header>
    <Content
      style={{
        padding: "0 50px",
        marginTop: 64,
        height: "calc(100vh - 64px)",
        overflow: "auto"
      }}
    >
      {content}
    </Content>
  </Layout>
);

export { LayoutPublic };
