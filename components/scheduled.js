import React from "react";
import { useState } from "react";

import { useSelector} from "react-redux";
import { Checkbox } from 'antd';
import {Link} from 'react-router-dom';
import {LeftOutlined} from "@ant-design/icons"


const Scheduled=()=> {
    const [checked, setChecked] = useState([]);

    const list=useSelector((state)=>state.todoReducer.list);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };
// Return classes based on whether item is checked
    const isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";
    const showDates=()=>{
        
        return(

        list.map((elem,index)=>{
            if(elem.data.timestamp==="Invalid Date")
        {
        //   elem.data.timestamp="";
        return("");
        }
        else{
        return(
                <div key={index}>                    
                {/* <h4>{elem.data.timestamp} {elem.data.todo_title}</h4> */}
                <span className="check">
                            <Checkbox value={elem} type="checkbox" onChange={handleCheck}/>
                                <span className={isChecked(elem)}>
                                    <span className="item">{elem.data.todo_title}</span>
                                </span>
                                <div className="date">
                                    {elem.data.timestamp}
                                </div>
                        </span>
                </div>
        )}
    })
        )
  }
  return ( 
    <div>
        <div className="add-reminder-btn">
            <Link to="/"><h3><LeftOutlined/>Scheduled todos:</h3></Link>
        </div>
        <div className="show">
            {showDates()}
        </div>
    </div>
 );
}
  
  
  
  export default Scheduled;