import React, { useMemo, useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
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

const db = getDatabase(app);

function AccountsReq() {
  const [deleteCheck, setdeleteCheck] = useState(false);

  const DeleteItem = (id) => {
    console.log(id);
  };
  const [check, setCheck] = useState(false);
  const [dummyCheck, setDummyCheck] = useState(false);

  const [data, setLogedinEmail] = useState([]);
  const { key, alumniSchoolName } = useSelector(
    (state) => state.persistedReducer
  );
  console.log("key is", key);

  // key should be dynamic
  const starCountRef = ref(db, "users/alumni");

  let navigate = useNavigate();
  const onApproveHandler = (alKey) => {
    console.log("approve called", alKey);
    set(ref(db, "users/alumni/" + alKey + "/approve"), true);
    dummyCheck ? setDummyCheck(false) : setDummyCheck(true);
    setLogedinEmail([]);
  };

  const onDisapproveHandler = (alKey) => {
    console.log("disaprove called", alKey);
    set(ref(db, "users/alumni/" + alKey), null);
    deleteCheck ? setdeleteCheck(false) : setdeleteCheck(true);
    setLogedinEmail([]);
  };

  useEffect(() => {
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();

          //onValue(ref(db,"users/alumni/"+childKey))

          onValue(ref(db, "School/" + key), (innerSnapshot) => {
            console.log("buzz key", innerSnapshot.key);
            console.log("buzz value", innerSnapshot.val().schoolName);

            if (
              innerSnapshot.val().schoolName == childData.schoolInfo.schoolName
            ) {
              if (!childData.approve) {
                childData["alumniKey"] = childKey;
                childData["alumniSchoolname"] = childData.schoolInfo.schoolName;
                childData["gYear"] = childData.schoolInfo.graduationyear;
                setLogedinEmail((prev) => [...prev, childData]);
              }
            }
          });
          // childData['alumniKey'] = childKey;
          console.log("child data", childData.schoolInfo.schoolName);
          // if(!childData.approve){
          //     setLogedinEmail((prev) => [...prev, childData]);
          // }
          console.log("child data array", data, "length", data.length);
          // ...
        });
        setCheck(true);
      },
      {
        onlyOnce: false,
      }
    );
  }, [deleteCheck, dummyCheck]);
  const addTodo = useCallback(
    (item, index) => {
      {
        console.log(item);
      }

      return (
        <div className="rows">
          <div
            style={{
              width: "15%",
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4>{item.email}</h4>
          </div>
          <div
            style={{
              width: "15%",
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4>{item.firstName}</h4>
          </div>

          <div
            style={{
              width: "15%",
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4>{item.lastName}</h4>
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
            <h4>{item.alumniSchoolname}</h4>
          </div>

          <div
            style={{
              width: "15%",
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4>{item.gYear}</h4>
          </div>

          <div
            style={{
              width: "15%",
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <button
              onClick={() => {
                onApproveHandler(item.alumniKey);
              }}
            >
              Approve
            </button>
            :
            <button
              onClick={() => {
                onDisapproveHandler(item.alumniKey);
              }}
            >
              Disapprove
            </button>
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
            <button onClick={() => navigate("/loggedin")}>move back</button>
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
                <h5>email</h5>
              </div>

              <div
                style={{
                  width: "17%",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>first name</h5>
              </div>

              <div
                style={{
                  width: "17%",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>phone number</h5>
              </div>
              <div
                style={{
                  width: "17%",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>school name</h5>
              </div>
              <div
                style={{
                  width: "17%",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>graduation year</h5>
              </div>

              <div
                style={{
                  width: "17%",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>Approve/disApprove</h5>
              </div>
            </div>
            {data.map((item, index) => {
              return addTodo(item, index);
            })}

            <div className="paragraphDiv">
              <p>StudentBook does not sell your information to anyone</p>
            </div>
          </div>
        </Container>
      </>
    );
}

export default AccountsReq;

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
