import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {DeleteFilled} from "@ant-design/icons"
import { Checkbox } from 'antd';
import { deleteTodo } from "../actions/todoActions";
import "../index.css";
import { useParams, Link } from 'react-router-dom';
import {LeftOutlined} from "@ant-design/icons";


const ShowList = () => {
   const [checked, setChecked] = useState([]);
   const list=useSelector((state)=>state.todoReducer.list);
   const dispatch = useDispatch();
   let params = useParams();
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

    let filtered_list= list.filter((elem)=>elem.data.category === params.listName)
    
      const show =()=>{
      return(
       filtered_list.map((elem,index)=>{
        if(elem.data.timestamp==="Invalid Date")
        {
          elem.data.timestamp="";
        }
           return(
               <div className="each-line" >
                <div className="each-items" key={index}>
                   <span className="check">
                       <Checkbox value={elem} type="checkbox" onChange={handleCheck}/>
                           <span className={isChecked(elem)}>
                               <span className="item">{elem.data.todo_title}</span>
                            </span>
                           <div className="date">
                               {elem.data.timestamp}
                           </div>
                           <div className="description">
                               {elem.data.todo_description}
                           </div>
                   </span>
                   <button
                       className="delete-btn"
                       type="button"  
                       onClick={()=> dispatch(deleteTodo(elem.data.id))}>
                           <span style={{fontSize:25, color: "tomato"}}><DeleteFilled/></span>
                   </button>
                   
               </div>
               <hr></hr>
              </div>
           )  
       })
      )}
   return(
      <div>
        <span>
        <Link to="/"><LeftOutlined/></Link>
        <h5>{params.listName}</h5>
        </span>
        <br/>
         <div>
            {show()}
         </div>
      </div>
   )
 }


export default ShowList ;