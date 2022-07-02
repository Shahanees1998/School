import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Register from "../Components/EnrollSchool/Register";
import SchoolInformation from "../Components/EnrollSchool/SchoolInformation";
import Payment from "../Components/EnrollSchool/Payment";
import Complete from "../Components/EnrollSchool/Complete";
import ContactUs from "../Components/EnrollSchool/ContactUs";
import registerImage from "../assets/Images/registerImage.svg";

function Settings({ navigation }) {
  const [buttonPressed, setButtonPresed] = useState("Personal");
  return (
    <>
      <Container>
        <h3>Settings</h3>
        <div className="headerButtonsContainer">
          <button
            className="headerButton"
            onClick={() => setButtonPresed("Personal")}
          >
            Personal Settings
          </button>
          <button
            className="headerButton"
            onClick={() => setButtonPresed("Account")}
          >
            Account Settings
          </button>
        </div>
      </Container>
    </>
  );
}

export default Settings;

const Container = styled.div`
  position: absolute;
  width: 98vw;
  padding-inline: 1vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  .headerButtonsContainer {
    width: 25%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .headerButton {
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
