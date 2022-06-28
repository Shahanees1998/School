import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";

import LoginComponent from "../Components/LoginComponent";
function Login() {
  const [component, setcomponent] = useState("register");

  function componentHandler(item1) {
    setcomponent(item1);
  }

  return (
    <>
      <Header />
      <Container>
        <div className="innerDiv">
          <h3>Login</h3>
        </div>
      </Container>

      <LoginComponent onClick={componentHandler} />
    </>
  );
}

export default Login;

const Container = styled.div`
  background-color: white;
  height: 12vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .innerDiv {
    //background-color: yellow;
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
  }
`;
