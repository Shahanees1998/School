import React, { useEffect } from "react";
import styled from "styled-components";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import setLogedinEmail from "../Redux/actions";
import { useLocation } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const { userType } = useSelector((state) => state.persistedReducer);

  const location = useLocation();
  let navigate = useNavigate();

  const { data, key } = useSelector((state) => state.persistedReducer);

  useEffect(() => {
    console.log(location);
    console.log(data);
    console.log(`data is ${data}`);

    if (
      location.pathname == "/loggedin" ||
      location.pathname == "/alumnilogin"
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
          <div className="imgDiv" onClick={() => navigate("/home")}>
            <img src={require("../imgs/userImg.png")} className="userImg" />
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
                  onClick={() => navigate("/login")}
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
                <button
                  className="headerButtons"
                  onClick={() => dispatch(setLogedinEmail(""))}
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
                    Logout
                  </h3>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
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
