import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import HomeLeftChild from "../Components/Home/HomeLeftChild";
import HomeRightChild from "../Components/Home/HomeRightChild";
import { useNavigate } from "react-router-dom";

function HomePgae() {
  const navigate = useNavigate();

  function enrollSchollHandler() {
    navigate("/EnrollSchool");
  }

  function enrolAlumni() {
    navigate("/EnrollAlumni");
  }

  return (
    <>
      <Header />
      <Container>
        <div className="leftDiv">
          <HomeLeftChild
            enrollSchollHandler={enrollSchollHandler}
            enrolAlumni={enrolAlumni}
          />
        </div>
        <div className="rightDiv">
          <HomeRightChild />
        </div>
      </Container>
    </>
  );
}

export default HomePgae;

const Container = styled.div`
  flex: 1;
  display: flex;
  .leftDiv {
    height: 100%;
    width: 50%;
    background-color: honeydew;
  }
  .rightDiv {
    height: 100%;
    width: 50%;
  }

  h3 {
    line-height: 20%;
    text-align: center;
    margin-bottom: -1%;
    font-size: 20px;
  }
  h4 {
    line-height: 20%;
    text-align: center;
    //font-size: 20px;
  }
  .enrollText {
    font-size: 20px;
  }
  .text {
    font-size: 17px;
  }
  @media screen and (max-width: 850px) {
    .enrollText {
      font-size: 10px;
    }
    .text {
      font-size: 8px;
    }
  }
`;
