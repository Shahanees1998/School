import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import RegisterAlumni from "../Components/EnrollAlumni/RegisterAlumni";
import SchoolInformationAlumni from "../Components/EnrollAlumni/SchoolInformationAlumni";
import CompleteAlumni from "../Components/EnrollAlumni/CompleteAlumni";

import registerImage from "../assets/Images/registerImage.svg";

function EnrollAlumni() {
  const navigate = useNavigate();

  const [component, setcomponent] = useState("register");
  const [key, setKey] = useState("");

  function getKey(item1) {
    setKey(item1);
  }

  function componentHandler(item1) {
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
          {component === "register" ? (
            <RegisterAlumni onClick={componentHandler} ongetval={getKey} />
          ) : component === "schoolInformation" ? (
            <SchoolInformationAlumni onClick={componentHandler} getKey={key} />
          ) : component === "complete" ? (
            <CompleteAlumni onClick={componentHandler} />
          ) : null}
        </div>
        <div className="rightChild">
          <img src={registerImage} id="img" />
        </div>
      </Container>
    </>
  );
}

export default EnrollAlumni;

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
