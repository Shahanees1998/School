import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import toast, { Toaster } from "react-hot-toast";

import app from "../../firebase";
import school from "../../assets/Images/school.svg";
import contact from "../../assets/Images/contact.svg";

const db = getDatabase(app);

function SchoolInformationAlumni(props) {
  const key = props.getKey;
  const [schoolNamesList, setSchoolNamesList] = useState([]);

  useEffect(() => {
    onValue(ref(db, "School"), (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        setSchoolNamesList((prev) => [...prev, childData]);
      });
    });
  }, []);

  const [alumniSchoolInfo, setAlumniSchoolInfo] = useState({
    schoolName: "",
    graduationyear: "",
    alumniNumber: "",
  });
  function backHandler() {
    var val = "register";
    var val = "register";
    props.onClick(val);
  }

  function nextHandler() {
    if (
      alumniSchoolInfo.schoolName == "" ||
      alumniSchoolInfo.graduationyear == "" ||
      alumniSchoolInfo.alumniNumber == ""
    ) {
      toast.custom(
        <div
          style={{
            marginTop: "5%",
            width: "100%",
            height: "6vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              alignSelf: "flex-start",
              width: "30%",
              height: "100%",
              borderLeftWidth: "8px",
              borderColor: "red",
              borderStyle: "solid",
              borderBottomWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderRadius: 5,
              backgroundColor: "#F5F5F5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                color: "#515C6F",
                fontFamily: "GraphikMedium",
                fontWeight: "100",
                fontSize: "12px",
              }}
            >
              Kindly fill all the fields
            </h3>
          </div>
        </div>,
        { duration: 1000 }
      );
    } else {
      var val = "complete";
      console.log("alumni key now", key);
      set(ref(db, "users/alumni/" + key + "/schoolInfo"), alumniSchoolInfo)
        .then(() => {
          console.log("data saved successfully");
        })
        .catch((err) => {
          console.log(err);
        });
      props.onClick(val);
    }
  }

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log("val", value);
    if (name != "alumniNumber") {
      setAlumniSchoolInfo({ ...alumniSchoolInfo, [name]: value });
    } else {
      var letters = /^$|^[0-9\b]+$/;
      if (value.match(letters)) {
        if (value >= 0 && value < 9999999999) {
          setAlumniSchoolInfo({ ...alumniSchoolInfo, [name]: value });
        } else {
          //  let isnum = /^\d+$/. test(value)

          toast.custom(
            <div
              style={{
                marginTop: "5%",
                width: "100%",
                height: "6vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  alignSelf: "flex-start",
                  width: "30%",
                  height: "100%",
                  borderLeftWidth: "8px",
                  borderColor: "red",
                  borderStyle: "solid",
                  borderBottomWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderRadius: 5,
                  backgroundColor: "#F5F5F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3
                  style={{
                    color: "#515C6F",
                    fontFamily: "GraphikMedium",
                    fontWeight: "100",
                    fontSize: "12px",
                  }}
                >
                  length of number should be 11
                </h3>
              </div>
            </div>,
            { duration: 1000 }
          );
        }
      } else {
        toast.custom(
          <div
            style={{
              marginTop: "5%",
              width: "100%",
              height: "6vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                alignSelf: "flex-start",
                width: "30%",
                height: "100%",
                borderLeftWidth: "8px",
                borderColor: "red",
                borderStyle: "solid",
                borderBottomWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderRadius: 5,
                backgroundColor: "#F5F5F5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "#515C6F",
                  fontFamily: "GraphikMedium",
                  fontWeight: "100",
                  fontSize: "12px",
                }}
              >
                invalid key presed
              </h3>
            </div>
          </div>,
          { duration: 1000 }
        );
      }
    }
  };
  const InputsList = [
    {
      id: 1,
      image: school,
      name: "graduationyear",
      value: alumniSchoolInfo.graduationyear,
      onch: onChangeHandler,
      ph: "Enter Graduation Year",
    },
    {
      id: 2,
      image: contact,
      onch: onChangeHandler,
      ph: "Enter phone number",
      name: "alumniNumber",
      value: alumniSchoolInfo.alumniNumber,
    },
  ];
  return (
    <>
      <Container>
        {InputsList.map((item) => {
          return (
            <div id={item.id} className="inputsConatiner">
              <img src={item.image} style={{ width: "30px", height: "30px" }} />
              <input
                className="inputDiv"
                style={{ outline: "none" }}
                placeholder={item.ph}
                name={item.name}
                value={item.value}
                onChange={item.onch}
              />
            </div>
          );
        })}
        <div className="inputsConatiner select">
          <img src={school} style={{ width: "30px", height: "30px" }} />

          <select
            id={"xyz"}
            name="schoolName"
            value={alumniSchoolInfo.schoolName}
            style={{
              outline: "none",
              marginLeft: 30,
              borderColor: "rgba(218, 221, 225, 0.4)",
              backgroundColor: "white",
              color: "rgba(14, 55, 70, 0.4)",
              height: "80%",
              width: "40%",
              borderRadius: 5,
            }}
            onClick={onChangeHandler}
            onChange={onChangeHandler}
          >
            {schoolNamesList.map((SchoolDetail, index) => (
              <option value={SchoolDetail.schoolName}>
                {SchoolDetail.schoolName}
              </option>
            ))}
          </select>
        </div>
        <button
          className="inputsConatiner button blueBack"
          onClick={() => nextHandler()}
        >
          <h3 className="whiteText"> Next</h3>
        </button>
        <button
          className="inputsConatiner button"
          style={{ marginTop: -20 }}
          onClick={() => backHandler()}
        >
          <h3 className="blueText">Back</h3>
        </button>
        <Toaster />
      </Container>
    </>
  );
}

export default SchoolInformationAlumni;

const Container = styled.div`
  //background-color: green;
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;

  .inputsConatiner {
    height: 10%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .select {
    justify-content: flex-start;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border: 1px solid #2291f1;
  }
  .blueBack {
    background-color: #2291f1;
  }
  .whiteText {
    color: white;
  }
  .blueText {
    color: #2291f1;
  }
  .inputDiv {
    height: 100%;
    padding-inline: 10px;
    width: 80%;
    display: flex;
    justify-content: center;
    padding-left: 20px !important;
    border-radius: 7px;
    border: 1px solid rgba(218, 221, 225, 0.4);
  }
`;
{
  /*
  select#xyz {
    -webkit-appearance: button;
    -webkit-border-radius: 2px;
    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    -webkit-padding-end: 20px;
    -webkit-padding-start: 2px;
    -webkit-user-select: none;
    background-image: url(../images/select-arrow.png),
      -webkit-linear-gradient(white, white 40%, white);
    background-position: center right;
    background-repeat: no-repeat;
    border: 1px solid white;
    font-size: inherit;
    margin: 0;
    overflow: hidden;
    padding-top: 2px;
    padding-bottom: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
*/
}
