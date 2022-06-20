import React, { useMemo, useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import TableRows from "./TableRows";
import Header from "../Components/Header";
import AllPending from "./AllPending";
import { useNavigate } from "react-router-dom";
import app from "../firebase";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  update,
} from "firebase/database";
import { useSelector } from "react-redux";
import deleteItem from "../imgs/delete.png";
import Modal from 'react-modal';

const db = getDatabase(app);


// const data = [
//     { id: 1, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
//     { id: 2, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
//     { id: 3, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
//     { id: 4, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
//     { id: 5, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
//     { id: 6, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
// ]

function Table() {


    const [deleteId, setDeletedId] = useState(false);
    const { key } = useSelector((state) => state.persistedReducer);
    const [deleteCheck, setdeleteCheck] = useState(false);

  const DeleteItem = () => {
   //   setModalVisible(true)
   //deletedId is the id which we want to delete
      console.log('delted id', deleteId);
      set(ref(db,"School/"+key+"/items/"+deleteId),null);
      deleteCheck?setdeleteCheck(false):setdeleteCheck(true);

  };
  const [check, setCheck] = useState(false);

  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)
  console.log("key is", key);

  // key should be dynamic
  const starCountRef = ref(db, "School/" + key + "/items");

  let navigate = useNavigate();

  useEffect(() => {
      setData([])

      onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          childData['itemKey'] = childKey;
          console.log("child data", childData);
          setData((prev) => [...prev, childData]);
          console.log("child data array", data, "length", data.length);
          // ...
        });
        setCheck(true);
      },
      {
        onlyOnce: false,
      }
    );
  }, [deleteCheck]);
  const addTodo = useCallback(
    (item, index) => {
      {
        console.log(`here is my id ${item.itemKey}`);
      }

      return (
        <div className="rows">
          <input style={{ outline: "none" }} type="checkbox" />
          <div
            style={{
              width: "15%",
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4>{item.itemName}</h4>
          </div>

          <div
            style={{
              width: "15%",
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4>{item.itemCost}</h4>
          </div>

          <div
            style={{
              width: "15%",
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <h4>{item.stdName}</h4>
          </div>

          <div
            style={{
              width: "15%",
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4>{item.itemDescription}</h4>
          </div>

          <div
            style={{
              width: "15%",
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
            }}

            onClick={() => {setModalVisible(true);setDeletedId(item.itemKey)}}
          >
            <img src={deleteItem} style={{ width: 20, height: 20 }} />
          </div>
        </div>
      );
    },
    [data]
  );

  function addHandler() {
    navigate("/addInfo");
  }

  if (!check) return <div>Loading...</div>;
  else
    return (
      <>
        <Header />
        <div className="nav">
          <div className="leftDiv">
          <button onClick={() =>navigate('/accounts')}>Accounts Requests</button>

          </div>
          <div className="rightDiv">
          <h3>Needs</h3>

          </div>
        </div>
        <Container>
          <div className="innerDiv">
            <div className="tableHeaderDiv">
              <div
                style={{
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>Check All</h5>
              </div>

              <div
                style={{
                  width: "17%",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>Item</h5>
              </div>

              <div
                style={{
                  width: "17%",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>Cost</h5>
              </div>

              <div
                style={{
                  width: "17%",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>Student</h5>
              </div>

              <div
                style={{
                  width: "17%",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>Photo</h5>
              </div>

              <div
                style={{
                  width: "17%",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>Description</h5>
              </div>
            </div>
            {data.map((item, index) => {
              return addTodo(item, index);
            })}
            <div className="btnMainDiv">
              <div className="btnDiv">
                <button onClick={() => addHandler()}>Add</button>
              </div>
            </div>

            <div className="paragraphDiv">
              <p>StudentBook does not sell your information to anyone</p>
            </div>
          </div>
          <Modal isOpen={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
          style={{
    overlay: {
     
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '21.3%',
     left: '35%',
     right: 'auto',
    width: '30%',
      bottom: '40%',
      border: '1px solid #ccc',
      background: '#fff',
    
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}>
                <div style={{width: '100%',flexDirection: 'column',height: '90%', display:'flex',paddingTop: '3%', alignItems: 'center', justifyContent: 'center'}}>
                <h3 style={{marginTop: '2%', marginLeft: '3%',fontWeight: '100'}}>Are you sure to delete this Item</h3>
<button onClick={() =>{DeleteItem();setModalVisible(false)}}>Confirm Delete</button>
                </div>
                </Modal>
        </Container>
      </>
    );
}

export default Table;

const Container = styled.div`
  //background-color: gray;
  height: 79.7vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav {
    background-color: white;
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 50px;

  }
  .leftDiv {
    //background-color: yellowgreen;
    height: 100%;
    width: 40%;
    margin-left: 20px;
  }
  .rightDiv {
    //background-color: yellow;
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .rows {
    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .input {
    width: 30px;
    height: 30px;
  }
  .innerDiv {
    //background-color: aqua;
    height: 100%;
    width: 95%;
    overflow: auto;
  }
  .tableHeaderDiv {
    height: 10%;
    //background-color: brown;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btnMainDiv {
    //background-color: red;
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .btnDiv {
    //background-color: aliceblue;
    height: 90%;
    width: 17%;
  }
  button {
    background-color: gray;
    width: 100%;
    height: 100%;
    border: 0px;
    color: white;
    border-radius: 5px;
  }
  .paragraphDiv {
    //background-color: red;
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
