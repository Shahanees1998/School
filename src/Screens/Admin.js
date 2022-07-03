import React, { useState } from "react";
import styled from "styled-components";

import registerImage from "../assets/Images/registerImage.svg";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

import setLogedinEmail, { setAlumniSchoolName, setKey } from "../Redux/actions";
import { setLoginUserType } from "../Redux/actions";
import app from "../firebase";
import mail from "../assets/Images/mail.svg";
import lock from "../assets/Images/lock.svg";
import Alumni from "../assets/Images/Alumni.svg";
import school from "../assets/Images/school.svg";
import LoginComponent from "../Components/LoginComponent";
const db = getDatabase(app);

function AdminLogin() {
    const [component, setcomponent] = useState("register");

    const dispatch = useDispatch();

    // get data from redux

    const { data, key, alumnikey } = useSelector(
        (state) => state.persistedReducer
    );
    console.log(`data ${key}`);
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("supperadmin");
    const [isChecked, setIsChecked] = useState(false);
    const [check, setCheck] = useState(false);

    // const handleAlumni = () => {
    //     setUserType("Alumni");
    // };
    // const handleAppAdmin = () => {
    //     setUserType("AppAdmin");
    // };
    const onChangeHandler = (event) => {
        console.log("name", event.target.name);
        const inputName = event.target.name;
        const inputValue = event.target.value;
        switch (inputName) {
            case "email":
                setEmail(inputValue);
                break;
            case "password":
                setPassword(inputValue);
                break;
            default:
                console.log("default");
                break;
        }
    };

    function nextHandler() {
        if (email == "" || password == "") {
            toast.custom(
                <div
                    style={{
                        marginTop: "5%",
                        width: "100%",
                        height: "6vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                    }}
                >
                    <div
                        style={{
                            alignSelf: "flex-start",
                            width: "30%",
                            height: "100%",
                            borderLeftWidth: "8px",
                            borderColor: "red",
                            borderStyle: "solid",
                            borderBottomWidth: 0,
                            borderRightWidth: 0,
                            borderTopWidth: 0,
                            borderRadius: 5,
                            backgroundColor: "#F5F5F5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <h3
                            style={{
                                color: "#515C6F",
                                fontFamily: "GraphikMedium",
                                fontWeight: "100",
                                fontSize: "12px",
                            }}
                        >
                            Kindly fill all the fields
                        </h3>
                    </div>
                </div>,
                { duration: 1000 }
            );
        } else {
            let role = "";

            // if (userType == "Admin") role = "admin";
            // else {
            //     role = "alumni";
            // }
            role="supperadmin"
            const starCountRef = ref(db, "users/" + role);
            let emailAndPassCheck = false;
            let keyvalue;

            onValue(
                starCountRef,
                (snapshot) => {
                    let alumniEmail, alumniPassword;
                    let approveCheck = false;
                    let SchoolName = "";
                    if(snapshot.val().email==email && snapshot.val().password==password){
                        navigate("/AdminPanel");
                    }
                    else{
                        toast.custom(
                            <div
                                style={{
                                    marginTop: "5%",
                                    width: "100%",
                                    height: "6vh",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        alignSelf: "flex-start",
                                        width: "30%",
                                        height: "100%",
                                        borderLeftWidth: "8px",
                                        borderColor: "red",
                                        borderStyle: "solid",
                                        borderBottomWidth: 0,
                                        borderRightWidth: 0,
                                        borderTopWidth: 0,
                                        borderRadius: 5,
                                        backgroundColor: "#F5F5F5",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <h3
                                        style={{
                                            color: "#515C6F",
                                            fontFamily: "GraphikMedium",
                                            fontWeight: "100",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Sorry, You are not super admin!
                                    </h3>
                                </div>
                            </div>,
                            { duration: 1000 }
                        );
                    }
                    console.log("snapdata superadmin",snapshot.val(),'email',email)
                    // snapshot.forEach((childSnapshot) => {
                    //     const childKey = childSnapshot.key;
                    //     const childData = childSnapshot.val();
                    //     console.log("child data Login", childKey);
                    //
                    //     if (email == childData.email && password == childData.password) {
                    //         alumniEmail = childData.email;
                    //         alumniPassword = childData.password;
                    //         keyvalue = childKey;
                    //         approveCheck = childData.approve;
                    //         onValue(
                    //             ref(db, "users/" + role + "/" + childKey + "/schoolInfo"),
                    //             (innerSnapShot) => {
                    //                 innerSnapShot.forEach((innerChildSnapshot) => {
                    //                     console.log("inner snap", innerChildSnapshot.val());
                    //                     SchoolName = innerChildSnapshot.val();
                    //                 });
                    //             }
                    //         );
                    //
                    //         // SchoolName = childData.schoolName;
                    //     }
                    //     if (email == childData.email) {
                    //         alumniEmail = childData.email;
                    //     }
                    //     if (password == childData.password) {
                    //         alumniPassword = childData.password;
                    //     }
                    //
                    //     // ...
                    // });
                    // if (alumniEmail == email) {
                    //     if (alumniPassword == password) {
                    //         dispatch(setLogedinEmail(email));
                    //         if (userType == "Alumni") {
                    //             if (approveCheck) {
                    //                 dispatch(setAlumniSchoolName(SchoolName));
                    //                 dispatch(setLoginUserType("Alumni"));
                    //                 console.log("setAlumniSchoolName", SchoolName);
                    //                 navigate("/AdminPanel");
                    //             } else {
                    //                 console.log("Sorry!, you are not approved");
                    //                 toast.custom(
                    //                     <div
                    //                         style={{
                    //                             marginTop: "5%",
                    //                             width: "100%",
                    //                             height: "6vh",
                    //                             display: "flex",
                    //                             alignItems: "center",
                    //                             justifyContent: "flex-start",
                    //                         }}
                    //                     >
                    //                         <div
                    //                             style={{
                    //                                 alignSelf: "flex-start",
                    //                                 width: "30%",
                    //                                 height: "100%",
                    //                                 borderLeftWidth: "8px",
                    //                                 borderColor: "red",
                    //                                 borderStyle: "solid",
                    //                                 borderBottomWidth: 0,
                    //                                 borderRightWidth: 0,
                    //                                 borderTopWidth: 0,
                    //                                 borderRadius: 5,
                    //                                 backgroundColor: "#F5F5F5",
                    //                                 display: "flex",
                    //                                 alignItems: "center",
                    //                                 justifyContent: "center",
                    //                             }}
                    //                         >
                    //                             <h3
                    //                                 style={{
                    //                                     color: "#515C6F",
                    //                                     fontFamily: "GraphikMedium",
                    //                                     fontWeight: "100",
                    //                                     fontSize: "12px",
                    //                                 }}
                    //                             >
                    //                                 You are not approved
                    //                             </h3>
                    //                         </div>
                    //                     </div>,
                    //                     { duration: 1000 }
                    //                 );
                    //             }
                    //         } else {
                    //             dispatch(setKey(keyvalue));
                    //             dispatch(setLoginUserType("Admin"));
                    //
                    //             navigate("/AdminPanel");
                    //         }
                    //     }
                    // }
                    // if (alumniPassword == password) {
                    //     if (alumniEmail == email) {
                    //         if (userType == "Alumni") {
                    //             if (approveCheck) {
                    //                 console.log("sch", SchoolName);
                    //                 dispatch(setAlumniSchoolName(SchoolName));
                    //                 navigate("/AlumniLogin");
                    //             } else {
                    //                 console.log("Sorry!, you are not approved");
                    //                 toast.custom(
                    //                     <div
                    //                         style={{
                    //                             marginTop: "5%",
                    //                             width: "100%",
                    //                             height: "6vh",
                    //                             display: "flex",
                    //                             alignItems: "center",
                    //                             justifyContent: "flex-start",
                    //                         }}
                    //                     >
                    //                         <div
                    //                             style={{
                    //                                 alignSelf: "flex-start",
                    //                                 width: "30%",
                    //                                 height: "100%",
                    //                                 borderLeftWidth: "8px",
                    //                                 borderColor: "red",
                    //                                 borderStyle: "solid",
                    //                                 borderBottomWidth: 0,
                    //                                 borderRightWidth: 0,
                    //                                 borderTopWidth: 0,
                    //                                 borderRadius: 5,
                    //                                 backgroundColor: "#F5F5F5",
                    //                                 display: "flex",
                    //                                 alignItems: "center",
                    //                                 justifyContent: "center",
                    //                             }}
                    //                         >
                    //                             <h3
                    //                                 style={{
                    //                                     color: "#515C6F",
                    //                                     fontFamily: "GraphikMedium",
                    //                                     fontWeight: "100",
                    //                                     fontSize: "12px",
                    //                                 }}
                    //                             >
                    //                                 You are not approved
                    //                             </h3>
                    //                         </div>
                    //                     </div>,
                    //                     { duration: 1000 }
                    //                 );
                    //             }
                    //         } else {
                    //             navigate("/SchoolLogin");
                    //             dispatch(setKey(keyvalue));
                    //         }
                    //     }
                    // }
                    // if (alumniEmail != email) {
                    //     toast.custom(
                    //         <div
                    //             style={{
                    //                 marginTop: "5%",
                    //                 width: "100%",
                    //                 height: "6vh",
                    //                 display: "flex",
                    //                 alignItems: "center",
                    //                 justifyContent: "flex-start",
                    //             }}
                    //         >
                    //             <div
                    //                 style={{
                    //                     alignSelf: "flex-start",
                    //                     width: "30%",
                    //                     height: "100%",
                    //                     borderLeftWidth: "8px",
                    //                     borderColor: "red",
                    //                     borderStyle: "solid",
                    //                     borderBottomWidth: 0,
                    //                     borderRightWidth: 0,
                    //                     borderTopWidth: 0,
                    //                     borderRadius: 5,
                    //                     backgroundColor: "#F5F5F5",
                    //                     display: "flex",
                    //                     alignItems: "center",
                    //                     justifyContent: "center",
                    //                 }}
                    //             >
                    //                 <h3
                    //                     style={{
                    //                         color: "#515C6F",
                    //                         fontFamily: "GraphikMedium",
                    //                         fontWeight: "100",
                    //                         fontSize: "12px",
                    //                     }}
                    //                 >
                    //                     email not found
                    //                 </h3>
                    //             </div>
                    //         </div>,
                    //         { duration: 1000 }
                    //     );
                    // } else if (alumniPassword != password) {
                    //     toast.custom(
                    //         <div
                    //             style={{
                    //                 marginTop: "5%",
                    //                 width: "100%",
                    //                 height: "6vh",
                    //                 display: "flex",
                    //                 alignItems: "center",
                    //                 justifyContent: "flex-start",
                    //             }}
                    //         >
                    //             <div
                    //                 style={{
                    //                     alignSelf: "flex-start",
                    //                     width: "30%",
                    //                     height: "100%",
                    //                     borderLeftWidth: "8px",
                    //                     borderColor: "red",
                    //                     borderStyle: "solid",
                    //                     borderBottomWidth: 0,
                    //                     borderRightWidth: 0,
                    //                     borderTopWidth: 0,
                    //                     borderRadius: 5,
                    //                     backgroundColor: "#F5F5F5",
                    //                     display: "flex",
                    //                     alignItems: "center",
                    //                     justifyContent: "center",
                    //                 }}
                    //             >
                    //                 <h3
                    //                     style={{
                    //                         color: "#515C6F",
                    //                         fontFamily: "GraphikMedium",
                    //                         fontWeight: "100",
                    //                         fontSize: "12px",
                    //                     }}
                    //                 >
                    //                     Invalid Password
                    //                 </h3>
                    //             </div>
                    //         </div>,
                    //         { duration: 1000 }
                    //     );
                    // }

                    // setCheck(true)
                },
                {
                    onlyOnce: false,
                }
            );
        }
    }

    return (
        <>
            <Container>
                <div className="leftChild">
                    <h3>Admin Login</h3>
                    <div className="loginComponent">
                        <div className="inputsConatiner">
                            <img src={mail} style={{ width: "30px", height: "30px" }} />
                            <input
                                className="inputDiv"
                                style={{ outline: "none" }}
                                placeholder="enter email"
                                name="email"
                                value={email}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className="inputsConatiner">
                            <img src={lock} style={{ width: "30px", height: "30px" }} />
                            <input
                                className="inputDiv"
                                style={{ outline: "none" }}
                                type="password"
                                placeholder="enter password"
                                name="password"
                                value={password}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                flexDirection: "row",
                                width: "70%",
                            }}
                        >

                        </div>
                        <button
                            className="inputsConatiner button blueBack"
                            onClick={() => nextHandler()}
                        >
                            <h3 className="whiteText">Login</h3>
                        </button>
                        <button
                            className="inputsConatiner button"
                            onClick={() => navigate("/")}
                        >
                            <h3 style={{ color: "#2291f1" }}>Back</h3>
                        </button>

                        <Toaster />
                    </div>
                </div>
            </Container>
        </>
    );
}

export default AdminLogin;

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginComponent {
    height: 75vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
  }
  .inputsConatiner {
    height: 10%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .select {
    justify-content: flex-start;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border: 1px solid #2291f1;
  }
  .blueBack {
    background-color: #2291f1;
  }
  .whiteText {
    color: white;
  }
  .blueText {
    color: #2291f1;
  }
  .inputDiv {
    height: 100%;
    padding-inline: 10px;
    width: 80%;
    display: flex;
    justify-content: center;
    padding-left: 20px !important;
    border-radius: 7px;
    border: 1px solid rgba(218, 221, 225, 0.4);
  }
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