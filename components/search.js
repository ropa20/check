import React, {useState} from "react";
import "../index.css";
import { useSelector } from "react-redux";
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import {LeftOutlined, SearchOutlined} from "@ant-design/icons";

const SearchGo = ()=>{
  
  const [name, setName] = useState("");
  const list=useSelector((state)=>state.todoReducer.list);
  const handleSubmit = (event) => {
    event.preventDefault();
  
  }
  const searchForm=()=> {
  
    return (
      <>
      <form onSubmit={handleSubmit}>
          <Input
          placeholder="search" suffix={<SearchOutlined />}
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{borderRadius: '10px'}}
          />

      </form>
      </>
    )
  }
  const show =()=>{
    let filtered_list= list.filter((elem)=>elem.data.todo_title.toUpperCase() === name.toUpperCase())
    return(
     filtered_list.map((elem,index)=>{
         return(
             <div className="each-line" >
              <div className="each-items" key={index}>
              <span className="row">
                <h1>{elem.data.category}</h1>
                  <span className="item">{elem.data.todo_title}</span>
                      <div className="date">
                        {elem.data.timestamp}
                      </div>
              </span>
             </div>
            </div>
         )  
     })
    )}
    return(
      <>
      <div className="search">
      <Link to="/"><LeftOutlined/></Link>
        {searchForm()}
      </div>
      <div>
        {show()}
      </div>
      </>
    )
}
export default SearchGo;