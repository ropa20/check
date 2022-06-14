import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../actions/index";
import { Modal, Button, Typography } from 'antd';

const Todo =()=> {
    const [inputDate, setInputDate]= useState();
    const [inputCategory, setInputCategory]= useState();
    const { Text } = Typography;
    //Dispatch
    const dispatch = useDispatch();
    const { addTodo} = bindActionCreators(actionCreators,dispatch)
    const list2=useSelector((state)=>state.todoReducer.list2);


    const [values, setValues] = useState({
        title: "",
        loading: false,
        error: "",
      });
    
      const {
        title,
        loading,
        error,
      } = values;

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });

        const newTodo ={
            id:new Date(),
            todo_title: values.title,
            category: (inputCategory),
            timestamp: new Date(inputDate).toLocaleDateString(),
            check:null,
        }
        addTodo(newTodo)
        setValues({
            ...values,
            title: "",
            description: "",
            loading: false,
          });
          setVisible(false);
      };

    const handleChange = (name) => (event) => {
        const value =  event.target.value;
        setValues({ ...values, [name]: value });
    };

    const createTodoForm = () => (
        <form>
          <div className="form-group">
            <input
              onChange={handleChange("title")}
              name="title"
              className="form-control my-3"
              placeholder="Add todo"
              value={title}
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="date" value={inputDate} onChange={(event)=>{setInputDate(event.target.value)} }/>   <Text strong>Date</Text>
          </div><br/>
          <select style={{ width: 113, height: 28 }} 
            onChange={(event)=>{setInputCategory(event.target.value)} }
            >
            <option value="Select List" selected>Select List</option>

            {list2.map(item => {
                return (
                  <option key={item.data.titleId} value={item.data.list_title}>{item.data.list_title}</option>);
              })}
          </select>
        </form>
      );

      const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

     return (
      <>
        <Button type="link" size="large" onClick={showModal}>
            Add todo
        </Button>
        <Modal
          title="What to do?"
          visible={visible}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={onSubmit}>
              Add
            </Button>,
          ]}
        >
          <p>{createTodoForm()}</p>
        </Modal>
      </>
    );
}
export default Todo ;