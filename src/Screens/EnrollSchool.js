import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Register from "../Components/EnrollSchool/Register";
import SchoolInformation from "../Components/EnrollSchool/SchoolInformation";
import Payment from "../Components/EnrollSchool/Payment";
import Complete from "../Components/EnrollSchool/Complete";
import ContactUs from "../Components/EnrollSchool/ContactUs";
import registerImage from "../assets/Images/registerImage.svg";

function EnrollSchool({ navigation }) {
  const navigate = useNavigate();

  const [component, setcomponent] = useState("Register");
  const [key, setKey] = useState("");
  function getKey(item1) {
    setKey(item1);
  }
  function componentHandler(item1) {
    console.log(item1);
    if (item1 == "contactus") {
      navigate("/home");
    }
    setcomponent(item1);
  }

  return (
    <>
      <Container>
        <div className="leftChild">
          <div>
            <h3 style={{ fontSize: 30, margin: 0, color: "#2291F1" }}>Logo</h3>
            <h3 style={{ fontSize: 30, margin: 0, marginTop: 10 }}>
              {component}
            </h3>
          </div>
          {component === "Register" ? (
            <Register
              navigation={navigation}
              onClick={(item1) => componentHandler(item1)}
              ongetval={(item1) => getKey(item1)}
            />
          ) : component === "schoolInformation" ? (
            <SchoolInformation onClick={componentHandler} getKey={key} />
          ) : component === "payment" ? (
            <Payment onClick={componentHandler} />
          ) : component === "complete" ? (
            <Complete onClick={componentHandler} />
          ) : component === "contactus" ? (
            <ContactUs onClick={componentHandler} />
          ) : null}
        </div>
        <div className="rightChild">
          <img src={registerImage} id="img" />
        </div>
      </Container>
    </>
  );
}

export default EnrollSchool;

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bgImage {
    position: fixed;
    bottom: 0;
    background-position-x: right;
    background: url(${registerImage});
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  #img {
    display: block;
    width: 40vw;
    align-self: flex-end;
    height: 100vh;
    object-fit: cover;
  }
  .leftChild {
    height: 90%;
    width: 60%;
    padding-top: 1%;
    padding-left: 1%;
    display: flex;
    flex-direction: column;
  }
  .rightChild {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
