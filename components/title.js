import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../actions/index";
import { Modal, Button } from 'antd';
import { v4 as uuid } from 'uuid';


const Title =()=> {

    //Dispatch
    const dispatch = useDispatch();
    const { addTitle} = bindActionCreators(actionCreators,dispatch)

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
        setValues({ ...values, title:"",error: "", loading: true });

        const newTitle ={
            titleId:uuid(),
            list_title: values.title,
        }
        addTitle(newTitle)
        setValues({
            ...values,
            title: "",
            loading: false,
          });
          setVisible(false);
      };

    const handleChange = (name) => (event) => {
        const value =  event.target.value;
        setValues({ ...values, [name]: value });
    };

    const createTitleForm = () => (
        <form>
          <div className="form-group">
            <input
              onChange={handleChange("title")}
              name="title"
              className="form-control my-3"
              placeholder="List name"
              value={title}
              required
            />
          </div>
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
            Add list
        </Button>
        <Modal
          title="List"
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
          <p>{createTitleForm()}</p>
        </Modal>
      </>
    );
}
export default Title ;