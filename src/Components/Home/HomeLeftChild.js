import React from "react";
import styled from "styled-components";

function HomeLeftChild({ enrolAlumni, enrollSchollHandler }) {
  return (
    <Container>
      <div className="headingTextContainer">
        <div className="bigNeedsDiv">
          <div style={{ display: "flex" }}>
            <h1 className="needsText">Big</h1>
            <h1 className="needsText" style={{ color: "#2291F1" }}>
              Needs
            </h1>
          </div>
          <div style={{ display: "flex" }}>
            <h1 className="needsText leftMargin" style={{ color: "#2291F1" }}>
              Small
            </h1>
            <h1 className="needsText">payments</h1>
          </div>
        </div>
      </div>
      <div className="detailTextConatiner">
        <h6 className="detailText">
          Meet the needs of students from your school through small payments
        </h6>
      </div>
      <div className="regButtons">
        <div className="btnDiv">
          <button
            onClick={() => enrollSchollHandler()}
            className="blueBack button"
          >
            <h3 className="enrollText whiteText">Enroll School</h3>
            <h4 className="text whiteText">(for school admins)</h4>
          </button>
        </div>
        <div className="btnDiv">
          <button onClick={() => enrolAlumni()} className="button">
            <h3 className="enrollText blueText">Join your School</h3>
            <h4 className="text blueText">(for school alumni)</h4>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default HomeLeftChild;

const Container = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  .regButtons {
    width: 100%;
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
  }
  .headingTextContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .bigNeedsDiv {
    width: 100%;
    display: flex;
    margin-top: 5%;
    flex-direction: column;
    align-items: flex-start;
  }
  h1 {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
  }
  .button {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    border-color: #2291f1;
  }
  .blueBack {
    background-color: #2291f1;
  }
  .rightDiv {
    height: 61%;
    width: 13.3%;
    border-radius: 50%;
    margin-right: 3%;
    display: flex;
    align-items: center;
    background-color: skyblue;
  }
  .detailTextConatiner {
    width: 70%;
  }
  .detailText {
    font-size: 30px;
    font-weight: 400;
    color: rgba(14, 55, 70, 0.4);
  }
  .needsText {
    font-size: 50px;
    margin: 5px;
  }
  .leftMargin {
    margin-left: 3%;
  }
  .donatedText {
    font-size: 15px;
  }
  .enrollText {
    font-size: 20px;
    font-weight: 500;
  }
  .text {
    font-size: 17px;
    font-weight: 500;
  }
  .whiteText {
    color: white;
  }
  .blueText {
    color: #2291f1;
  }
  .btnDiv {
    border-radius: 5px;
    height: 5%;
    width: 40%;
    display: flex;
    background-color: green;
  }
  @media screen and (max-width: 750px) {
    .needsText {
      font-size: 40px;
    }
    .donatedText {
      font-size: 10px;
    }
  }
`;
