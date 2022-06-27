import React from "react";
import styled from "styled-components";
import bag from "../../assets/Images/bag.svg";
import cycle from "../../assets/Images/cycle.svg";
import books from "../../assets/Images/books.svg";
import table from "../../assets/Images/table.svg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomeRightChild() {
  let navigate = useNavigate();

  const { userType, data } = useSelector((state) => state.persistedReducer);
  function clickHandler() {
    if (data != "") {
      if (userType == "Alumni") {
        navigate("/alumnilogin");
      } else {
        navigate("/loggedin");
      }
    }
  }
  return (
    <Container onClick={() => clickHandler()}>
      <div className="firstImagesColumn">
        <img src={cycle} style={{ width: 160, height: 160, marginTop: 20 }} />

        <img src={bag} style={{ width: 160, height: 160, marginTop: 20 }} />
      </div>
      <div className="secondImagesColumn">
        <img
          src={books}
          style={{ width: 160, height: 160, marginBottom: 20 }}
        />

        <img
          src={table}
          style={{ width: 160, height: 160, marginBottom: 20 }}
        />
      </div>
    </Container>
  );
}

export default HomeRightChild;

const Container = styled.div`
  background-color: white;
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .firstImagesColumn {
    width: 30%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20;
  }
  .secondImagesColumn {
    width: 30%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20;
  }
  h2 {
    text-align: center;
  }
  .imgsDiv {
    //background-color: aqua;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 20;
    justify-content: space-around;
  }
  .imgDiv {
    width: 15%;
    background-color: antiquewhite;
    height: 0%;
    padding-top: 200;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
