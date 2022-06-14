import { Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";
import { Card, Button, Space, Input, Typography } from "antd";
import {
  CalendarOutlined,
  InboxOutlined,
  PlusCircleFilled,
  SearchOutlined
} from "@ant-design/icons";
import Todo from "./reminders";
import ShowTitle from "./showTitle";
import Title from "./title";

const { Footer, Content } = Layout;
const Home = () => {
  const list=useSelector((state)=>state.todoReducer.list);
  const { Text } = Typography;
  const today= new Date().toLocaleDateString();
  let today_list= list.filter((elem)=>elem.data.timestamp === today)
  let scheduled_list= list.filter((elem)=>elem.data.timestamp !== today)



  return (
    <div>
      <Layout>
        <Content>
          <Link to="/search">
          <Input placeholder="Search" suffix={<SearchOutlined />} style={{borderRadius: '10px'}}/>
          </Link>
          <div className="today-scheduled">
            <div className="flex-child today">
              <Link to={"/today"}>
                <Card
                  title="Today"
                  className="today"
                  style={{ width: 280, height:130 }}
                >
                  <Space
                    align="center"
                    style={{ width: "100%", justifyContent: "space-between" }}
                  >
                    <Button
                      type="primary"
                      shape="circle"
                      size="large"
                      icon={<CalendarOutlined />}
                      style={{ pointerEvents: "none" }}
                    />
                    <Text strong>{today_list.length}</Text>
                  </Space>
                </Card>
              </Link>
            </div>
            <div className="flex-child scheduled">
              <Link to={"/scheduled"}>
                <Card
                  title="Scheduled"
                  className="scheduled"
                  style={{ width: 280, height:130 }}
                >
                  <Space
                    align="center"
                    style={{ width: "100%", justifyContent: "space-between" }}
                  >
                    <Button
                      type="danger"
                      shape="circle"
                      size="large"
                      icon={<CalendarOutlined />}
                      style={{ pointerEvents: "none" }}
                    />
                    <Text strong>{scheduled_list.length}</Text>
                  </Space>
                </Card>
              </Link>
            </div>
          </div>
          <div className="all">
            <div className="flex-child all">
            <Link to={"/all"}>
                <Card
                  title="All"
                  className="scheduled"
                  style={{ width: 565, height:130 }}
                >
                  <Space
                    align="center"
                    style={{ width: "100%", justifyContent: "space-between" }}
                  >
                    <Button
                      type="secondary"
                      shape="circle"
                      size="large"
                      icon={<InboxOutlined />}
                      style={{ pointerEvents: "none", backgroundColor: "grey", color:"white" }}
                    />
                    <Text strong>{list.length}</Text>
                  </Space>
                </Card>
              </Link>
            </div>
          </div>
          <h3>My Lists</h3>
          <ShowTitle />
        </Content>
        <Footer>
          <div className="add-list">
            <button className="add-reminder-btn">
              <span className="add-list-link">
                <span
                  className="plus"
                  style={{ fontSize: 25, color: "DeepSkyBlue" }}
                >
                  <PlusCircleFilled />
                  <Todo />
                </span>
              </span>
            </button>
            <button className="add-list-btn">
              <span className="add-list-link">
                <Title />
              </span>
            </button>
          </div>
        </Footer>
      </Layout>
    </div>
  );
};

export default Home;
