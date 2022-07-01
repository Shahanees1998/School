import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";

import setLogedinEmail from "../Redux/actions";

import DropDown from "../assets/Images/DropDown.svg";
import LogOut from "../assets/Images/LogOut.svg";
import Settings from "../assets/Images/Settings.svg";

function Header() {
  const dispatch = useDispatch();
  const { userType } = useSelector((state) => state.persistedReducer);
  const [modalVisible, setModalVisible] = useState(false);

  const location = useLocation();
  let navigate = useNavigate();

  const { data, key } = useSelector((state) => state.persistedReducer);

  useEffect(() => {
    console.log(location);
    console.log(data);
    console.log(`data is ${data}`);

    if (
      location.pathname == "/SchoolLogin" ||
      location.pathname == "/AlumniLogin"
    ) {
      if (data == "") {
        navigate("/login");
      }
    }
  }, [location, data]);

  function loginHandler() {
    navigate("/home");
  }

  return (
    <Container>
      <div className="innerDiv">
        <div className="leftDiv">
          <div className="logoContainer" onClick={() => navigate("/home")}>
            <h3 style={{ color: "#2291F1" }}>LOGO</h3>
          </div>
        </div>
        <div className="rightDiv">
          <div className="searchDiv">
            <FaSearch size={17} className="searchIcon" />
            <input
              id="inputID"
              style={{
                outline: "none",
                backgroundColor: "#DADDE1",
                width: "100%",
              }}
              placeholder="Search"
              className="searchInput"
            />
          </div>

          <div className="loginAndIconDiv">
            <button
              className="headerButtons blueButton"
              onClick={() => loginHandler()}
            >
              <h3
                style={{
                  color: "#0E3746",
                  alignSelf: "center",
                  justifySelf: "center",
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                {" "}
                About
              </h3>
            </button>

            {data == "" ? (
              <div className="buttonContainer">
                <button
                  className="headerButtons"
                  onClick={() => navigate("/SchoolLogin")}
                >
                  <h3
                    style={{
                      color: "white",
                      alignSelf: "center",
                      justifySelf: "center",
                      fontSize: 20,
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Login
                  </h3>
                </button>
              </div>
            ) : (
              <div className="buttonContainer">
                <div onClick={() => navigate("/home")}>
                  <img
                    src={require("../imgs/userImg.png")}
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "20px",
                    }}
                  />
                </div>
                <div onClick={() => setModalVisible(true)}>
                  <img
                    src={DropDown}
                    style={{
                      marginLeft: "20px",
                      width: "15px",
                      height: "15px",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        style={{
          overlay: {
            backdropFilter: "blur(none)",
          },
          content: {
            position: "absolute",
            top: "5%",
            left: "90%",
            right: "auto",
            width: "7%",
            overflow: "hidden",
            bottom: "78%",
            borderWidth: 0,
            backgroundColor: "transparent",

            outline: "none",
          },
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            outline: "none",
          }}
        >
          <div
            style={{
              minWidth: "100%",
              height: "50%",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #ccc",
              justifyContent: "space-evenly",
            }}
            onClick={() => navigate("/settings")}
          >
            <img src={Settings} style={{ width: "20px", height: "20px" }} />
            <h6 style={{ margin: 0, color: "#0E3746" }}>Settings</h6>
          </div>
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            onClick={() => {
              dispatch(setLogedinEmail(""));
              setModalVisible(false);
            }}
          >
            <img src={LogOut} style={{ width: "20px", height: "20px" }} />

            <h6 style={{ margin: 0, color: "#0E3746" }}>Logout</h6>
          </div>
        </div>
      </Modal>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 12vh;
  width: 100%;
  border-bottom: 1px solid #dadde1;

  .innerDiv {
    height: 100%;
    width: 96%;
    margin-inline: 2%;
    display: flex;
  }
  .leftDiv {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .imgDiv {
    height: 60%;
    width: 15%;
    border-radius: 70%;
    overflow: hidden;
  }
  .logoCotainer {
    height: 60%;
    width: 25%;
  }
  .userImg {
    width: 100%;
    height: 100%;
  }
  #inputID::placeholder {
    color: #0e3746;
    font-size: 15px;
    opacity: 1;
  }
  .rightDiv {
    height: 100%;
    width: 75%;
    display: flex;
    align-items: center;
  }
  .searchDiv {
    width: 50%;
    height: 55%;
    display: flex;
    align-items: center;
    border-radius: 11px;
    background-color: #dadde1;
  }
  .searchIcon {
    color: #0e3746;
    margin-inline: 2%;
  }
  .searchInput {
    border-width: 0px;
  }

  .loginAndIconDiv {
    margin-left: 20%;
    width: 30%;
    height: 80%;
    display: flex;
    align-items: center;
  }
  .buttonContainer {
    display: flex;
    align-items: center;
    height: 100%;
    width: 60%;
  }
  .headerButtons {
    background-color: #2291f1;
    height: 60%;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    border: 0px;
    border-radius: 5px;
  }
  .blueButton {
    background-color: white;
    width: 70%;
  }
`;
