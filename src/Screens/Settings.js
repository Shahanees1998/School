import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import lock from "../assets/Images/lock.svg";
import Register from "../Components/EnrollSchool/Register";
import SchoolInformation from "../Components/EnrollSchool/SchoolInformation";
import Payment from "../Components/EnrollSchool/Payment";
import Complete from "../Components/EnrollSchool/Complete";
import ContactUs from "../Components/EnrollSchool/ContactUs";
import registerImage from "../assets/Images/registerImage.svg";
import cardCheck from "../assets/Images/cardCheck.svg";
import Header from "../Components/Header";
import user from "../assets/Images/userImg.png";
import userIcon from "../assets/Images/user.svg";
import mailIcon from "../assets/Images/mail.svg";
import contact from "../assets/Images/contact.svg";
import {useSelector} from "react-redux";
import {getDatabase, ref, update} from "firebase/database";
import app, {storage} from "../firebase";
import {getDownloadURL, ref as sRef, uploadBytesResumable} from "firebase/storage";

const db = getDatabase(app);

function Settings({ navigation }) {
  const { key } = useSelector((state) => state.persistedReducer);
  const [buttonPressed, setButtonPresed] = useState("Personal");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  const [bankInfo, setBankInfo]=useState({
    accountName:'',
    accountNumber:'',
    bankName:'allied',
    routingNumber:'123',
    imageUrl:''
  })

  // Handles input change event and updates state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }


  // handle upload
  function handleUpload() {
    if (!file) {
      alert("Please choose a file first!");
    }

    const storageRef = sRef(storage, `/profiles/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log("url", url);
            setBankInfo({ ...bankInfo, imageUrl: url });
          });
        }
    );
  }

  const onAccountInputHandler = (e) => {
    const{name, value} = e.target;
    setBankInfo({...bankInfo,[name]:value})
  }


  const updatePaymentHandler = () => {
    update(ref(db, "users/admin/" + key + "/bankInfo"), bankInfo)
        .then(() => {
          console.log("payment data updated successfully")
        })
  }

  const updateClickHandler = () =>{

    update(ref(db, "users/admin/" + key), {
      firstName,
      lastName,
      email,
      password,
      confirmPass:password,
    })
        .then(() => {
          console.log("user data updated successfully")
        })

  }

  return (
      <>
        <Header />
        <Container>
          <h3 style={{ marginLeft: "100px" }}>Settings</h3>
          <div className="headerButtonsContainer">
            <button
                className="headerButton"
                onClick={() => setButtonPresed("Personal")}
            >
              Personal Information
            </button>
            <button
                className="headerButton"
                onClick={() => setButtonPresed("Account")}
            >
              Payment Details
            </button>
          </div>
          {buttonPressed == "Personal" ? (
              <>
                {" "}
                <div className="userData">
                  <div className="info">
                    <div>
                      <img
                          width={50}
                          height={50}
                          src={user}
                          style={{ borderRadius: 30 }}
                      />
                    </div>
                    <div className="data">
                      <input
                          style={{ outline: "none" }}
                          placeholder="enter name"
                          type="file"
                          accept="image/*"
                          onChange={handleChange}
                      />

                    </div>
                  </div>
                  <button
                      className="uploadButton"
                      onClick={() => {
                        setButtonPresed("Account")
                        handleUpload()
                      }}
                  >
                    Upload<br/>
                    <p>{percent} "% done"</p>
                  </button>
                </div>
                <div className="userContact">
                  <div className="inputRow">
                    <div className="inputsContainer">
                      <img width={25} height={25} src={userIcon} />
                      <input
                          type="textbox"
                          id="firstname"
                          name="firstname"
                          className="input"
                          placeholder="firstname"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="inputsContainer">
                      <img width={25} height={25} src={userIcon} />
                      <input
                          type="textbox"
                          id="lastname"
                          name="lastname"
                          className="input"
                          placeholder="lastname"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="inputRow">
                    <div className="inputsContainer">
                      <img width={25} height={25} src={mailIcon} />
                      <input
                          type="textbox"
                          id="email"
                          name="email"
                          className="input"
                          placeholder="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="inputsContainer">
                      <img width={25} height={25} src={lock} />
                      <input
                          type="textbox"
                          id="password"
                          name="password"
                          className="input"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="inputRow">
                    <div className="inputButton">
                      <input
                          type="button"
                          id="lastname"
                          name="lastname"
                          className="input"
                          value="Update"
                          onClick={updateClickHandler}

                          // value={userType}
                      />
                    </div>
                  </div>
                </div>
              </>
          ) : (
              <div className="paymentContainer">
                <h3>Payment Information</h3>
                <div
                    className="cardDetailContainer"
                    style={{
                      backgroundColor: "rgba(218, 221, 225, 0.4)",
                      paddingInline: "5%",
                      width: "90%",
                    }}
                >
                  <div className="cardNumber">{`2334   -   2424   -   2424   -   5666`}</div>
                  <img style={{ width: "30px", height: "30px" }} src={cardCheck} />
                </div>
                <div className="cardDetailContainer">
                  <div
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                  >
                    <h4>CVV Number</h4>
                    <h6 style={{ color: "rgba(14, 55, 70, 0.4)" }}>
                      Enter the 3 or 4 digit number on the card
                    </h6>
                  </div>
                  <input
                      name="accountNumber"
                      value={bankInfo.accountNumber}
                      onChange={onAccountInputHandler}
                      style={{
                        backgroundColor: "rgba(218, 221, 225, 0.4)",
                        width: "30%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        outline: "none",
                        paddingLeft: "20px",
                        borderWidth: 0,
                      }}
                  />
                </div>

                <div className="cardDetailContainer">
                  <div
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                  >
                    <h4>Expiry Date</h4>
                    <h6 style={{ color: "rgba(14, 55, 70, 0.4)" }}>
                      Enter the expiration date on the card
                    </h6>
                  </div>
                  <input
                      name="accountName"
                      value={bankInfo.accountName}
                      onChange={onAccountInputHandler}
                      style={{
                        backgroundColor: "rgba(218, 221, 225, 0.4)",
                        width: "30%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        outline: "none",
                        paddingLeft: "20px",
                        borderWidth: 0,
                      }}
                  />
                </div>
                <button
                    className="cardDetailContainer"
                    style={{
                      backgroundColor: "#2291F1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 0,
                    }}

                    onClick={updatePaymentHandler}
                >
                  <h4 style={{ color: "white" }}> Update</h4>
                </button>
              </div>
          )}
        </Container>
      </>
  );
}

export default Settings;

const Container = styled.div`
  width: 100%;
  // padding-inline: 1vw;
  height: 87vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .paymentContainer {
    width: 50%;
    height: 100%;
    display: flex;
    margin-inline: 25%;
    flex-direction: column;
  }
  .cardDetailContainer {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
  }
  .cardNumber {
  }
  .headerButtonsContainer {
    width: 40%;
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    margin-left: 100px;
  }
  .headerButton {
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .headerButton:nth-child(1) {
    color: #2291f1;
    outline: 2px solid #2291f1;
  }
  .headerButton:nth-child(2) {
    color: #0e374666;
    outline: 2px solid #0e374666;
  }

  .userData {
    width: 45%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    align-items: center;
    border-bottom: 1px solid #dadde1;
    margin-top: 20px;
    margin-left: 120px;
  }
  .info {
    width: 30%;
    height: 100%;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .data {
    line-height: 12px;
    height: 50%;
    display: flex;
    justify-content: center;

    flex-direction: column;
    gap: 5px;
  }
  h4,
  h6 {
    margin: 0;
    padding: 0;
  }

  .uploadButton {
    width: 25%;
    height: 50%;
    display: flex;
    background: #2291f1;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border: none;
    outline: none;
  }
  .userContact {
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50%;
    margin-left: 100px;
  }
  .inputRow {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    height: 25%;
    margin-left: 20px;
  }

  .inputsContainer {
    height: 50%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }
  .inputButton {
    height: 50%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    // margin:0 auto;
    margin-left: 30px;
  }
  .input {
    height: 100%;
    width: 60%;
    background: #dadde166;
    border: none;
    border-radius: 5px;
    padding-left: 20px !important;
  }
  .input[type="button"] {
    width: 80%;
    background: #2291f1;
    border-radius: 0;
    color: #ffffff;
  }
`;