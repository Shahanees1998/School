import React, { useState } from "react";
import styled from "styled-components";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

import app from "../../firebase";
import toast, { Toaster } from "react-hot-toast";
import user from "../../assets/Images/user.svg";
import mail from "../../assets/Images/mail.svg";
import lock from "../../assets/Images/lock.svg";
const db = getDatabase(app);

function Register(props) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const onChangeHandler = (event) => {
    console.log("name", event.target.name);
    console.log("value", event.target.value);
    const inputName = event.target.name;
    const inputValue = event.target.value;
    switch (inputName) {
      case "firstName":
        setFirstName(inputValue);
        break;
      case "lastName":
        setLastName(inputValue);
        break;
      case "email":
        setEmail(inputValue);
        break;
      case "password":
        setPassword(inputValue);
        break;
      case "confirmPass":
        setConfirmPass(inputValue);
        break;
      default:
        console.log("default");
        break;
    }
  };

  function nextHandler() {
    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      password == "" ||
      confirmPass == ""
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
      if (password != confirmPass) {
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
                password should be same
              </h3>
            </div>
          </div>,
          { duration: 1000 }
        );
      } else {
        var val = "schoolInformation";
        var key = push(ref(db, "users/admin"), {
          firstName,
          lastName,
          email,
          password,
          confirmPass,
        });

        console.log("key", key.key);
        props.ongetval(key.key);

        props.onClick(val);
      }
    }
  }

  const InputsList = [
    {
      id: 1,
      image: user,
      value: firstName,
      name: "firstName",
      onch: onChangeHandler,
      ph: "Enter Firstname",
    },
    {
      id: 2,
      image: user,
      value: lastName,
      name: "lastName",

      onch: onChangeHandler,
      ph: "Enter Lastname",
    },
    {
      id: 3,
      image: mail,
      value: email,
      name: "email",

      onch: onChangeHandler,
      ph: "Enter Email",
    },
    {
      id: 4,
      image: lock,
      value: password,
      name: "password",

      onch: onChangeHandler,
      ph: "Enter Password",
    },
    {
      id: 5,
      image: lock,
      value: confirmPass,
      name: "confirmPass",

      onch: onChangeHandler,
      ph: "Confirm Password",
    },
  ];

  return (
    <Container>
      {InputsList.map((item) => {
        return (
          <div id={item.id} className="inputsConatiner">
            <img src={item.image} style={{ width: "30px", height: "30px" }} />
            {item.name == "password" || item.name == "confirmPass" ? (
              <input
                className="inputDiv"
                type="password"
                style={{ outline: "none" }}
                placeholder={item.ph}
                name={item.name}
                value={item.value}
                onChange={item.onch}
              />
            ) : (
              <input
                className="inputDiv"
                style={{ outline: "none" }}
                placeholder={item.ph}
                name={item.name}
                value={item.value}
                onChange={item.onch}
              />
            )}
          </div>
        );
      })}

      <button
        className="inputsConatiner button blueBack"
        onClick={() => nextHandler()}
      >
        <h3 className="whiteText"> Next</h3>
      </button>
      <button
        className="inputsConatiner button"
        style={{ marginTop: -20 }}
        onClick={() => navigate(-1)}
      >
        <h3 className="blueText">Back</h3>
      </button>
      <Toaster />
    </Container>
  );
}

export default Register;

const Container = styled.div`
  //background-color: green;
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  .inputsConatiner {
    height: 10%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
