import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../index.css";
import { RightOutlined, UnorderedListOutlined} from "@ant-design/icons";
import { Card, Button } from 'antd';

const ShowTitle = () => {
  const list2 = useSelector((state) => state.todoReducer.list2);

  const show = () => {
    return list2.map((elem) => {

      return(
        <div className="" >
            <div className="" key={elem.data.id}>
            <Link to={`lists/${elem.data.list_title}`}>
        
        <Card className="reminder" style={{ width: 565, height:80, color:"grey" }}>
            <div className="add-list-btn">
                <RightOutlined/> 
            </div>
            <div className="title">
            <Button
              type="button"
              shape="circle"
              size="large"
              icon={<UnorderedListOutlined />}
              style={{ pointerEvents: "none", float: "left",backgroundColor: "#EFAF41", color:"white" }}/>
            <h1>{elem.data.list_title}</h1>
            </div>
        </Card>
    </Link>
            </div>
            
        </div>
    )
    });
  };
  return <div className="main-div">{show()}</div>;
};

export default ShowTitle;
