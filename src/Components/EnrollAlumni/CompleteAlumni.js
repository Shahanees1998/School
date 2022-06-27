import React from "react";
import styled from "styled-components";

function Complete(props) {
  function doneHandler() {
    var val = "contactus";
    props.onClick(val);
  }
  return (
    <Container>
      <div className="paragraphDiv">
        <div className="h4Div">
          <h4>
            Thank you for registering.You will be notified within one business
            day when your School Admin would accept your registrtion
          </h4>
        </div>
      </div>
      <button className="inputsConatiner button" onClick={() => doneHandler()}>
        <h3 style={{ color: "white" }}> Next</h3>
      </button>
    </Container>
  );
}

export default Complete;

const Container = styled.div`
  background-color: white;
  height: 78vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .paragraphDiv {
    //background-color: yellow;
    height: 60%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    //justify-content: center;
  }
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
    background-color: #2291f1;
    border: 1px solid #2291f1;
  }

  .h4Div {
    //background-color: aqua;
    height: 90%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h4 {
    text-align: center;
    color: rgba(14, 55, 70, 0.4);
  }
`;
