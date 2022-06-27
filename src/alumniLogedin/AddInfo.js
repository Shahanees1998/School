import React, { useState } from "react";
import styled from "styled-components";
import Header2 from "../Components/LoginPageHeader2";
import { FaAngleRight } from "react-icons/fa";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import app from "../firebase";
const db = getDatabase(app);

function AddInfo() {
  const [itemInfo, setItemInfo] = useState({
    itemName: "",
    itemCost: "",
    stdName: "",
    itemDescription: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setItemInfo({ ...itemInfo, [name]: value });
  };
  console.log("hello");
  const onSubmitHandler = () => {
    set(
      ref(
        db,
        "School/-N4bWXKjJIn5KB4p4atr/items/" + new Date().toLocaleTimeString()
      ),
      itemInfo
    )
      .then(() => {
        console.log("data saved successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header2 />
      <Container>
        <div className="needAddDiv">
          <h3>Need</h3>
          <FaAngleRight size={20} />
          <h3>Add</h3>
        </div>

        <div className="itemDiv">
          <div className="h5Div">
            <h5>Item</h5>
          </div>
          <div className="inputDiv">
            <input
              style={{ outline: "none" }}
              placeholder="enter item"
              name="itemName"
              value={itemInfo.itemName}
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <div className="itemDiv">
          <div className="h5Div">
            <h5>Cost</h5>
          </div>
          <div className="inputDiv">
            <input
              style={{ outline: "none" }}
              placeholder="enter cost"
              name="itemCost"
              value={itemInfo.itemCost}
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <div className="itemDiv">
          <div className="h5Div">
            <h5>Student Name</h5>
          </div>
          <div className="inputDiv">
            <input
              style={{ outline: "none" }}
              placeholder="enter name"
              name="stdName"
              value={itemInfo.stdName}
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <div className="itemDiv">
          <div className="h5Div">
            <h5>Student Photo</h5>
          </div>
          <div className="inputDiv">
            <input
              style={{ outline: "none" }}
              placeholder="enter name"
              type="file"
            />
          </div>
        </div>

        <div className="descriptionDiv">
          <div className="h5DescriptionDiv">
            <h5>Description</h5>
          </div>
          <div className="inputDescriptionDiv">
            <input
              style={{ outline: "none" }}
              placeholder="enter description"
              type="text"
              name="itemDescription"
              value={itemInfo.itemDescription}
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <div className="btnMainDiv">
          <div className="btnDiv">
            <button onClick={onSubmitHandler}>Submit</button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddInfo;

const Container = styled.div`
  //background-color: burlywood;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .needAddDiv {
    //background-color: azure;
    height: 8%;
    width: 95%;
    display: flex;
    align-items: center;
  }
  .itemDiv {
    //background-color: aqua;
    height: 13.5%;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .h5Div {
    //background-color: yellow;
    height: 45%;
    width: 20%;
    display: flex;
    align-items: center;
  }
  .inputDiv {
    //background-color: bisque;
    height: 55%;
    width: 16%;
    border: 1px solid black;
    border-radius: 7px;
    display: flex;
    align-items: center;
  }
  input {
    width: 100%;
    border: 0px;
  }
  .descriptionDiv {
    //background-color: aqua;
    height: 17%;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .h5DescriptionDiv {
    //background-color: yellow;
    height: 40%;
    width: 20%;
    display: flex;
    align-items: center;
  }
  .inputDescriptionDiv {
    //background-color: bisque;
    height: 60%;
    width: 40%;
    border: 1px solid black;
    border-radius: 7px;
    display: flex;
    align-items: center;
  }
  .btnMainDiv {
    //background-color: green;
    height: 11%;
    width: 95%;
    display: flex;
    align-items: center;
  }
  .btnDiv {
    // background-color: yellow;
    height: 70%;
    width: 16%;
  }
  button {
    background-color: gray;
    height: 100%;
    width: 100%;
    border: 0px;
    border-radius: 7px;
    font-size: 20px;
    color: white;
  }
`;
