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
  const HaederList = ["Name", "Graduation Year", "Phone Number", "Status"];

  const DeleteItem = (id) => {
    console.log(id);
  };
  const [check, setCheck] = useState(false);
  const [dummyCheck, setDummyCheck] = useState(false);

  const [data, setLogedinEmail] = useState([]);
  const { key, alumniSchoolName } = useSelector(
    (state) => state.persistedReducer
  );
  console.log("key is nothing man", key);

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
            console.log("child value", childData);

            if (innerSnapshot.val().schoolName == childData.schoolInfo.schoolName) {
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
            <h4 className="cutText">
              {item.firstName} {item.lastName}
            </h4>
          </div>

          <div
            style={{
              width: "15%",
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4 className="cutText">{item.gYear}</h4>
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
            <h4 className="cutText">{item.schoolInfo.alumniNumber}</h4>
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

        <Container>
          <div className="nav">
            <h3>School Dashboard</h3>
          </div>
          <div className="schoolPanelHeaderContainer">
            {HaederList.map((item) => {
              return (
                <div
                  key={item}
                  style={{
                    width: "15%",
                    display: " flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item == "nill" || item == "nil" ? null : <h6>{item}</h6>}
                </div>
              );
            })}
          </div>
          <div className="innerDiv">
            {data.map((item, index) => {
              return addTodo(item, index);
            })}
          </div>
          <div className="backButton">
            <button onClick={() => navigate("/SchoolLogin")}>move back</button>
          </div>
        </Container>
      </>
    );
}

export default AccountsReq;

const Container = styled.div`
  //background-color: gray;
  height: 79.7vh;
  width: 98%;
  margin-inline: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .nav {
    background-color: white;
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  .cutText {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #0e3746;
    font-weight: 500;
    font-size: 12px;
  }
  .schoolPanelHeaderContainer {
    height: 7%;
    width: 100%;
    background-color: rgba(34, 145, 241, 0.14);
    display: flex;
    margin-top: 20;
    align-items: center;
    justify-content: space-between;
  }
  .backButton {
    width: 10%;
    height: 50px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    background-color: #2291f1;
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
    height: 50px;
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
    padding-bottom: 50px;
    margin-bottom: 50px;
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
    background-color: #2291f1;
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
