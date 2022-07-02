import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "./header";
import otp from "../components/assets/images/otp.png";
import otp11 from "../components/assets/images/otp11.svg";
import { BiCategory, BiArrowBack, BiChevronLeft } from "react-icons/bi";
import logo from "../components/assets/images/logo.svg";
import { BsCart3 } from "react-icons/bs";
import { Cartcomponent } from "./Cartcomponent";
import { MdSearch } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { FiShoppingBag } from "react-icons/fi";

import { Link } from "react-router-dom";
import { setToken } from "../Redux/actions";
import { useMediaQuery } from "react-responsive";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {
  AiOutlineMenu,
  AiOutlineDown,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMinus,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import {
  setCartnum,
  setOrder,
  updateOrder,
  deleteOrder,
} from "../Redux/actions";
import { BsMinecartLoaded } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import logo_sellify from "../components/assets/images/logo_sellify.png";
import { useTimer } from "react-timer-hook";
import { FaHome } from "react-icons/fa";
import { clearCart } from "../Redux/actions";
import Modal from "react-modal";
import login from "../components/assets/images/SchoolLogin.svg";
import { TiShoppingCart } from "react-icons/ti";
import { FiLogIn } from "react-icons/fi";
import { setApiproducts } from "../Redux/actions";

import emptycart from "../components/assets/images/emptycart.svg";
import { BsHeadset } from "react-icons/bs";
import acunt from "../components/assets/images/acunt.svg";

import Countdown from "react-countdown";
import { useSelector, useDispatch } from "react-redux";
import Allitems from "../components/products/Allitems";
import toast, { Toaster } from "react-hot-toast";
import { FiMail } from "react-icons/fi";

import { HiOutlineMail } from "react-icons/hi";
import Footer from "./footer";
import back from "../components/assets/images/back.PNG";

export const Verifynum = ({ expiryTimestamp }) => {
  let navigate = useNavigate();

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const verify = [1, 2, 3, 4];
  const { Rmethod, store } = useSelector((state) => state.persistedReducer);
  const { apiproducts1, catags } = useSelector(
    (state) => state.persistedReducer
  );
  const [srch, setsrch] = useState(false);
  const [focusedval, setFocused] = useState("");

  const pin1ref = useRef(null);
  const pin2ref = useRef(null);
  const pin3ref = useRef(null);
  const pin4ref = useRef(null);
  const pin5ref = useRef(null);
  const pin6ref = useRef(null);
  const [border, setborder] = useState("rgba(0, 0, 0, 0.21)");
  const [pin1, setpin1] = useState("");
  const [pin2, setpin2] = useState("");
  const [pin3, setpin3] = useState("");
  const [pin4, setpin4] = useState("");
  const [pin5, setpin5] = useState("");
  const [pin6, setpin6] = useState("");
  const [message, setmessage] = useState(
    "Check your messages for a verification code"
  );
  const [messagecolor, setmessagecolor] = useState("rgba(0, 0, 0, 0.21)");
  const [explore, setexplore] = useState(false);
  const [cart, setcart] = useState(false);
  const [pin, setpin] = useState("");
  const [code, setcode] = useState("(+92)");
  const [country, setcountry] = useState("Pakistan");
  const [isvisible, setisvisible] = useState(false);
  const { mobilenumber } = useSelector((state) => state.orderReducer);
  const { arr } = useSelector((state) => state.orderReducer);
  const { number } = useSelector((state) => state.orderReducer);
  const [tottal, settottal] = useState(0);
  const [disable, setdisable] = useState(true);
  const [mobnumber, setmobnumber] = useState();
  const dispatch = useDispatch();
  const [items, setitems] = useState(Allitems);
  const [filtered, setfiltered] = useState(Allitems);
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const [match, setmatch] = useState();
  const [text, settext] = useState("");
  const [shown, setshown] = useState(true);
  const location = useLocation();
  const { from } = location.state;
  const [show, setshow] = useState(false);
  const rememberMe = localStorage.getItem("auth_number");
  const [clr, setclr] = useState("grey");
  const logedin_number = localStorage.getItem("auth_number");
  const [categoriese, setcategoriese] = useState(false);
  const setcttg = () => {
    setcategoriese(true);
  };
  const setcrrt = () => {
    setcart(true);
  };
  const setexxplore = () => {
    setexplore(true);
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 8 && focusedval == "pin6") {
      setpin6("");
      setFocused("pin5");
      pin5ref.current.focus();
    } else if (e.keyCode === 8 && focusedval == "pin5") {
      setFocused("pin4");
      pin4ref.current.focus();
    } else if (e.keyCode === 8 && focusedval == "pin4") {
      setFocused("pin3");
      pin3ref.current.focus();
    } else if (e.keyCode === 8 && focusedval == "pin3") {
      setFocused("pin2");
      pin2ref.current.focus();
    } else if (e.keyCode === 8 && focusedval == "pin2") {
      setFocused("pin1");
      pin1ref.current.focus();
    }
  };
  const logout = () => {
    localStorage.removeItem("auth_number");
    localStorage.removeItem("auth_token");
  };
  useEffect(() => {
    setshown(true);
    setclr("grey");
    setdisable(true);
    // Anything in here is fired on component mount.
    setmatch(false);
    if (from.length == 13) {
      getcode();
    }
    let m = 0;
    const ar = [];

    {
      /** parseFloat(item.quantity)*/
    }
    arr.map((item) => {
      ar.push(parseFloat(parseFloat(item.price) * parseFloat(item.qun)));
      //  settottal(tottal +  parseFloat(item.price * quanids[i].qun))
    });

    for (let j = 0; j < ar.length; j++) {
      m = parseFloat(m) + parseFloat(ar[j]);
    }

    subtottal(tottal + m);
  }, []);

  const subtottal = (price) => {
    settottal(parseFloat(tottal) + parseFloat(price));
  };
  if (arr.length < 1) {
    navigate("/cart");
  }
  const rendercart = (item) => {
    return (
      <>
        <div
          style={{
            overflowY: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "12%",
            marginTop: "1%",
          }}
        >
          <div style={{ height: "90%", width: "22%", borderRadius: 5 }}>
            <img
              src={item.photo}
              height={"90%"}
              width={"100%"}
              style={{ borderRadius: 5, overflow: "hidden" }}
            />
          </div>
          <div style={{ height: "90%", width: "75%" }}>
            <h3
              className="text"
              style={{ fontWeight: "100", fontSize: "12px" }}
            >
              {item.title}
            </h3>
            <h3
              style={{
                fontFamily: "Montserrat-Medium",
                fontWeight: "100",
                fontSize: "8px",
                color: "#53B175",
              }}
            >
              QTY.{item.qun}
            </h3>
            <div
              style={{
                width: "100%",
                height: "10%",
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "9px",
                  fontFamily: "Montserrat-Medium",
                  fontWeight: "100",
                }}
              >
                RS. {item.price}
              </h3>

              <div
                style={{
                  display: "flex",
                  width: "55%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    marginRight: "4%",
                    width: "50%",
                    justifyContent: "space-evenly",
                    display: "flex",
                    marginTop: "7%",
                  }}
                >
                  <button
                    onClick={() => {
                      dispatch(setCartnum(1));
                      dispatch(updateOrder(item.id, 1));
                      settottal(parseFloat(tottal) + parseFloat(item.price));
                    }}
                    style={{
                      borderWidth: 0,
                      borderStyle: "solid",
                      borderColor: "#efefef",
                      width: "50%",
                      height: "3vh",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        borderWidth: 0.5,
                        borderStyle: "solid",
                        borderColor: "#efefef",
                        background: "white",
                        height: "80%",
                        boxShadow: " 1px 1px 1px #9E9E9E",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AiOutlinePlus
                        style={{
                          color: "black",
                          height: "clamp(10px, 10%, 100%)",
                          width: "clamp(20px, 10%, 100%)",
                        }}
                      />
                    </div>
                  </button>
                  <div
                    style={{
                      marginLeft: "5%",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      display: "flex",
                      height: "50%",
                      alignSelf: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontWeight: "100",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Montserrat-Medium",
                      }}
                    >
                      {item.qun}
                    </h3>
                  </div>
                  {item.qun > 1 ? (
                    <button
                      onClick={() => {
                        dispatch(setCartnum(-1));
                        dispatch(updateOrder(item.id, -1));
                        settottal(parseFloat(tottal) - parseFloat(item.price));
                      }}
                      style={{
                        borderWidth: 0,
                        borderStyle: "solid",
                        borderColor: "#efefef",
                        width: "50%",
                        height: "3vh",
                        backgroundColor: "white",
                      }}
                    >
                      <div
                        style={{
                          borderWidth: 0.5,
                          borderStyle: "solid",
                          borderColor: "#efefef",
                          background: "white",
                          height: "80%",
                          boxShadow: " 1px 1px 1px #9E9E9E",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AiOutlineMinus
                          style={{
                            color: "black",
                            height: "clamp(10px, 10%, 100%)",
                            width: "clamp(20px, 10%, 100%)",
                          }}
                        />
                      </div>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(setCartnum(-1));
                        dispatch(deleteOrder(getIndex(item.id)));
                        settottal(parseFloat(tottal) - parseFloat(item.price));
                      }}
                      style={{
                        borderWidth: 0,
                        borderStyle: "solid",
                        borderColor: "#efefef",
                        width: "50%",
                        height: "3vh",
                        backgroundColor: "white",
                      }}
                    >
                      <div
                        style={{
                          borderWidth: 0.5,
                          borderStyle: "solid",
                          borderColor: "#efefef",
                          background: "white",
                          height: "80%",
                          boxShadow: " 1px 1px 1px #9E9E9E",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AiOutlineMinus
                          style={{
                            color: "black",
                            height: "clamp(10px, 10%, 100%)",
                            width: "clamp(20px, 10%, 100%)",
                          }}
                        />
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      setclr("#53B175");
      setdisable(false);
      setshown(false);
      return null;
    } else {
      if (seconds > 9) {
        return <h3 style={{ fontSize: "10px", color: "black" }}>{seconds}</h3>;
      } else {
        return <h3 style={{ fontSize: "10px", color: "black" }}>0{seconds}</h3>;
      }
      // Render a countdown
    }
  };
  const jao = () => {
    {
      isDesktopOrLaptop
        ? toast.custom(
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
                  Entered OTP was not correct
                </h3>
              </div>
            </div>,
            { duration: 1000 }
          )
        : toast.custom(
            <div
              style={{
                width: "80%",
                height: "6vh",
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
                  fontSize: "7px",
                }}
              >
                Entered OTP was not correct
              </h3>
            </div>,
            { duration: 1000 }
          );
    }

    setborder("#FADBD8");
    setmessage("The Verification Code was incorrect");
    setmessagecolor("#FADBD8");
    setpin1("");
    setpin2("");
    setpin3("");
    setpin4("");
    setpin5("");
    setpin6("");
    setmatch(false);
    pin1ref.current.focus();
  };
  const getcode = () => {
    if (navigator.onLine == true) {
      fetch(
        "http://ec2-3-139-91-180.us-east-2.compute.amazonaws.com/password-less/auth/mobile/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile: from,
            operator: "Mobilink",
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            {
              isDesktopOrLaptop
                ? toast.custom(
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
                          borderColor: "#53B175",
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
                          OTP Sent successfully!
                        </h3>
                      </div>
                    </div>,
                    { duration: 1000 }
                  )
                : toast.custom(
                    <div
                      style={{
                        width: "80%",
                        height: "6vh",
                        borderLeftWidth: "8px",
                        borderColor: "#53B175",
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
                          fontSize: "7px",
                        }}
                      >
                        OTP Sent successfully!
                      </h3>
                    </div>,
                    { duration: 1000 }
                  );
            }
            return response.json();
          } else {
            //  console.log(response)

            {
              setborder("red");
              isDesktopOrLaptop
                ? toast.custom(
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
                          Entered pin is not Correct
                        </h3>
                      </div>
                    </div>,
                    { duration: 1000 }
                  )
                : toast.custom(
                    <div
                      style={{
                        width: "80%",
                        height: "6vh",
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
                          fontSize: "7px",
                        }}
                      >
                        Entered pin is not Correct
                      </h3>
                    </div>,
                    { duration: 1000 }
                  );
            }

            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
          setborder("red");
          {
            isDesktopOrLaptop
              ? toast.custom(
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
                        Entered pin is not correct
                      </h3>
                    </div>
                  </div>,
                  { duration: 1000 }
                )
              : toast.custom(
                  <div
                    style={{
                      width: "80%",
                      height: "6vh",
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
                        fontSize: "7px",
                      }}
                    >
                      Entered pin is not correct
                    </h3>
                  </div>,
                  { duration: 1000 }
                );
          }
          console.log(error);
        });

      {
        /*  toast.success('Pin Send',{
            style: {backgroundColor: 'white',borderLeftWidth: 10,borderRightWidth: 0,borderBottomWidth: 0,borderTopWidth: 0,borderLeftColor: 'green',borderStyle: 'solid', width: '80%'},
        })*/
      }
    } else {
      <>
        {isDesktopOrLaptop
          ? toast.custom(
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
                    no internet connection
                  </h3>
                </div>
              </div>,
              { duration: 1000 }
            )
          : toast.custom(
              <div
                style={{
                  width: "80%",
                  height: "6vh",
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
                    fontSize: "7px",
                  }}
                >
                  no internet connection
                </h3>
              </div>,
              { duration: 1000 }
            )}
      </>;
    }
  };

  const verifycode = () => {
    (async () => {
      const rawResponse = await fetch(
        "http://ec2-3-139-91-180.us-east-2.compute.amazonaws.com/password-less/auth/token/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile: from,
            token: pin1 + pin2 + pin3 + pin4 + pin5 + pin6,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            //  console.log(response)

            jao();

            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          const content = responseJson;
          if (content.token != undefined) {
            console.log(content.token);
            setmatch(true);
            //   AsyncStorageLib.setItem('tkkn', content.token)
            dispatch(setToken(content.token));
            localStorage.setItem("auth_token", content.token);
            localStorage.setItem("auth_number", from);
            navigate("/addres");
            console.log(content);
          } else {
            jao();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  };
  if (pin.length == 6) {
    // verifycode()
  }
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const check = (id) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        if (arr[i].quantity > 0) {
          return true;
        }
      }
    }
    return false;
  };
  const numb = (id) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        return arr[i].quantity;
      }
    }
  };
  const getIndex = (id) => {
    return arr.findIndex((obj) => obj.id === id);
  };
  const renderitem = () => {
    return <Fin></Fin>;
  };

  const Search = (search) => {
    if (search) {
      const newdata = items.filter((item) => {
        const itemdata = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textdata = search.toUpperCase();
        return itemdata.indexOf(textdata) > -1;
      });
      setfiltered(newdata);
    } else {
      setfiltered(items);
    }
  };
  return (
    <>
      {isDesktopOrLaptop ? (
        <div
          style={{
            overflowY: "hidden",
            maxHeight: "100%",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          {/*               Header                   */}
          <Header setctg={setcttg} setcrt={setcrrt} setexplr={setexxplore} />

          <div
            style={{
              width: "100%",
              height: "80vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "60%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ marginLeft: "18%", width: "80%", height: "100%" }}>
                <div
                  style={{
                    height: "45%",
                    alignItems: "center",
                    display: "flex",
                    width: "90%",
                    justifyContent: "flex-start",
                    marginTop: "1%",
                  }}
                >
                  <div>
                    <Link to="/cart">
                      <BiChevronLeft
                        style={{
                          color: "black",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      height: "100%",
                      width: "74%",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={otp11}
                      height={"100%"}
                      width={"100%"}
                      style={{}}
                    />
                  </div>
                </div>
                <div style={{ marginTop: "3%" }}>
                  <h3 style={{ fontWeight: "100", fontSize: "20px" }}>
                    Enter OTP
                  </h3>
                </div>
                <div style={{ marginTop: "0" }}>
                  <h3
                    style={{
                      color: border,
                      fontFamily: "GraphikRegular",
                      fontWeight: "500",
                      fontWeight: "100",
                      fontSize: "15px",
                    }}
                  >
                    {message}
                  </h3>
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      marginTop: "2%",
                      marginRight: "29%",
                      width: "60%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div style={{ display: "flex", width: "100%" }}>
                      <Khana1>
                        <Inputsearch1
                          value={pin1}
                          onFocus={() => setFocused("pin1")}
                          onKeyDown={handleKeyPress}
                          ref={pin1ref}
                          onChange={(e) => {
                            if (
                              e.target.value >= 0 &&
                              e.target.value < 10 &&
                              e.target.value != ""
                            ) {
                              setpin1(e.target.value);

                              if (pin1 != null) {
                                pin2ref.current.focus();
                              }
                            } else {
                              setpin1("");
                            }
                          }}
                          type="text"
                          style={{
                            backgroundColor: "rgba(249, 251, 231, 0.6)",
                            color: "black",
                            paddingLeft: "35%",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: border,
                          }}
                        />
                      </Khana1>
                      <Khana1>
                        <Inputsearch1
                          type="text"
                          ref={pin2ref}
                          onFocus={() => setFocused("pin2")}
                          onKeyDown={handleKeyPress}
                          value={pin2}
                          onChange={(e) => {
                            if (
                              e.target.value >= 0 &&
                              e.target.value < 10 &&
                              e.target.value != ""
                            ) {
                              setpin2(e.target.value);

                              if (pin2 != null) {
                                pin3ref.current.focus();
                              }
                            } else {
                              setpin2("");
                            }
                          }}
                          style={{
                            backgroundColor: "rgba(249, 251, 231, 0.6)",
                            color: "black",
                            paddingLeft: "35%",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: border,
                          }}
                        />
                      </Khana1>
                      <Khana1>
                        <Inputsearch1
                          type="text"
                          ref={pin3ref}
                          onFocus={() => setFocused("pin3")}
                          onKeyDown={handleKeyPress}
                          value={pin3}
                          onChange={(e) => {
                            if (
                              e.target.value >= 0 &&
                              e.target.value < 10 &&
                              e.target.value != ""
                            ) {
                              setpin3(e.target.value);

                              if (pin3 != null) {
                                pin4ref.current.focus();
                              }
                            } else {
                              setpin3("");
                            }
                          }}
                          style={{
                            backgroundColor: "rgba(249, 251, 231, 0.6)",
                            color: "black",
                            paddingLeft: "35%",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: border,
                          }}
                        />
                      </Khana1>
                      <Khana1>
                        <Inputsearch1
                          type="text"
                          ref={pin4ref}
                          onFocus={() => setFocused("pin4")}
                          onKeyDown={handleKeyPress}
                          value={pin4}
                          onChange={(e) => {
                            if (
                              e.target.value >= 0 &&
                              e.target.value < 10 &&
                              e.target.value != ""
                            ) {
                              setpin4(e.target.value);

                              if (pin4 != null) {
                                pin5ref.current.focus();
                              }
                            } else {
                              setpin4("");
                            }
                          }}
                          style={{
                            backgroundColor: "rgba(249, 251, 231, 0.6)",
                            color: "black",
                            paddingLeft: "35%",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: border,
                          }}
                        />
                      </Khana1>
                      <Khana1>
                        <Inputsearch1
                          value={pin5}
                          onFocus={() => setFocused("pin5")}
                          onKeyDown={handleKeyPress}
                          ref={pin5ref}
                          onChange={(e) => {
                            if (
                              e.target.value >= 0 &&
                              e.target.value < 10 &&
                              e.target.value != ""
                            ) {
                              setpin5(e.target.value);

                              if (pin5 != null) {
                                pin6ref.current.focus();
                              }
                            } else {
                              setpin5("");
                            }
                          }}
                          type="text"
                          style={{
                            backgroundColor: "rgba(249, 251, 231, 0.6)",
                            color: "black",
                            paddingLeft: "35%",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: border,
                          }}
                        />
                      </Khana1>
                      <Khana1>
                        <Inputsearch1
                          value={pin6}
                          onFocus={() => setFocused("pin6")}
                          onKeyDown={handleKeyPress}
                          ref={pin6ref}
                          onChange={(e) => {
                            if (
                              e.target.value >= 0 &&
                              e.target.value < 10 &&
                              e.target.value != ""
                            ) {
                              setpin6(e.target.value);

                              //   if (pin6 != null) { pin6ref.current.focus() }
                            } else {
                              setpin6("");
                            }
                          }}
                          type="text"
                          style={{
                            backgroundColor: "rgba(249, 251, 231, 0.6)",
                            color: "black",
                            paddingLeft: "35%",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: border,
                          }}
                        />
                      </Khana1>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "5%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "7%",
                      width: "60%",
                      borderWidth: 0.5,
                      borderStyle: "solid",
                      borderColor: "#e5e5e5",
                    }}
                  >
                    {" "}
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "2%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "75%",
                        alignItems: "center",
                        justifyContent: "space-between",
                        display: "flex",
                      }}
                    >
                      <button
                        disabled={disable}
                        onClick={() => {
                          setclr("#53B175");
                          getcode();
                          setshown(true);
                          setdisable(true);
                        }}
                        style={{
                          alignItems: "center",
                          backgroundColor: "white",
                          display: "flex",
                          borderWidth: 0,
                          width: "40%",
                        }}
                      >
                        <HiOutlineMail
                          style={{ color: clr, width: "12%", height: "30%" }}
                        />
                        <h3
                          style={{
                            fontSize: "clamp(2px, 13px, 30px)",
                            fontFamily: "Medium",
                            fontWeight: "100",
                            color: clr,
                          }}
                        >
                          Resend Code
                        </h3>
                      </button>

                      {shown == true ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "16%",
                          }}
                        >
                          <h2 style={{ fontSize: "10px" }}>00 :</h2>
                          <div style={{ marginLeft: "3%" }}>
                            <Countdown
                              date={Date.now() + 30000}
                              renderer={renderer}
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                {pin1 != "" &&
                pin2 != "" &&
                pin3 != "" &&
                pin4 != "" &&
                pin5 != "" &&
                pin6 != "" ? (
                  <div
                    style={{
                      width: "100%",
                      height: "7%",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <button
                      onClick={() => verifycode()}
                      style={{
                        marginTop: "5%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "73%",
                        borderRadius: 5,
                        height: "100%",
                        backgroundColor: "#53b175",
                        borderWidth: 0.5,
                        borderStyle: "solid",
                        borderColor: "#e5e5e5",
                      }}
                    >
                      <h3
                        style={{
                          color: "white",
                          fontWeight: "100",
                          fontSize: "15px",
                        }}
                      >
                        Verify Pin
                      </h3>
                    </button>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "7%",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <button
                      disabled={true}
                      onClick={() => verifycode()}
                      style={{
                        marginTop: "5%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "73%",
                        borderRadius: 5,
                        height: "100%",
                        backgroundColor: "#71BD91",
                        borderWidth: 0.5,
                        borderStyle: "solid",
                        borderColor: "#e5e5e5",
                      }}
                    >
                      <h3
                        style={{
                          color: "rgba(249, 251, 231, 0.6)",
                          fontWeight: "100",
                          fontSize: "15px",
                          fontFamily: "Montserrat-Medium",
                        }}
                      >
                        Verify Pin
                      </h3>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div
              style={{
                width: "30%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Cartcomponent />
            </div>
          </div>

          {/* Explre modal */}
          <Modal
            onRequestClose={() => setexplore(false)}
            isOpen={explore}
            style={{
              overlay: {
                backgroundColor: "rgba(115, 115, 115, 0.55)",
              },
              content: {
                marginTop: "-4%",
                position: "absolute",
                height: "100%",
                left: "67%",
                width: "35%",
                //  bottom: '20%',

                borderWidth: 0,
                //  border: '1px solid #ccc',
                background: "white",
              },
            }}
          >
            <div
              style={{
                marginTop: "-5%",
                marginLeft: "-5.3%",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              {/* <button><BiMenu style={style} /></button>*/}

              <div
                style={{
                  justifyContent: "flex-start",
                  display: "flex",
                  backgroundColor: "#53b175",
                  width: "100%",
                  height: "7%",
                }}
              ></div>

              <div
                style={{
                  marginLeft: "3%",
                  marginTop: "5%",
                  height: "5%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  onClick={() => setexplore(false)}
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "2%",
                      paddingTop: "1%",
                    }}
                  >
                    <AiOutlineHome
                      style={{
                        color: "rgba(81, 92, 111, 0.59)",
                        width: "7%",
                        height: "7%",
                      }}
                    />

                    <h5
                      style={{
                        color: "rgba(81, 92, 111, 0.59)",
                        marginLeft: "3%",
                        fontWeight: "100",
                        fontSize: "10px",
                        fontFamily: "GraphikMedium",
                      }}
                    >
                      Home
                    </h5>
                  </div>
                </Link>
              </div>

              <div
                style={{
                  marginLeft: "3%",
                  marginTop: "5%",
                  height: "5%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "2%",
                      paddingTop: "1%",
                    }}
                  >
                    <TiShoppingCart
                      style={{
                        color: "rgba(81, 92, 111, 0.59)",
                        width: "7%",
                        height: "7%",
                      }}
                    />
                    {number >= 1 ? (
                      <div
                        style={{
                          marginLeft: "-3.3%",
                          marginTop: "-1.4%",
                          width: "3.8%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "3vh",
                          backgroundColor: "#53b175",
                          borderRadius: "10px",
                        }}
                      >
                        <span
                          style={{ color: "white", fontSize: "10px" }}
                          class="icon-button__badge"
                        >
                          {number}
                        </span>
                      </div>
                    ) : null}
                    <h5
                      style={{
                        color: "rgba(81, 92, 111, 0.59)",
                        marginLeft: "3%",
                        fontWeight: "100",
                        fontSize: "10px",
                        fontFamily: "GraphikMedium",
                      }}
                    >
                      Cart
                    </h5>
                  </div>
                </Link>
              </div>

              <div
                style={{
                  marginLeft: "3%",
                  marginTop: "5%",
                  height: "5%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  onClick={() => setcategoriese(true)}
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "2%",
                      paddingTop: "1%",
                    }}
                  >
                    <BiCategory
                      style={{
                        color: "rgba(81, 92, 111, 0.59)",
                        width: "7%",
                        height: "7%",
                      }}
                    />
                    <h5
                      style={{
                        color: "rgba(81, 92, 111, 0.59)",
                        marginLeft: "3%",
                        fontWeight: "100",
                        fontSize: "10px",
                        fontFamily: "GraphikMedium",
                      }}
                    >
                      Categoriese
                    </h5>
                  </div>
                </Link>
              </div>
              <div
                style={{
                  marginTop: "5%",
                  marginBottom: "4%",
                  width: "96%",
                  height: "0.1vh",
                  borderWidth: "0",
                  backgroundColor: "rgba(81, 92, 111, 0.15)",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "2%",
                  marginRight: "2%",
                }}
              ></div>
              {/****** //////////////////////////////////////////////////////////////////// */}

              <div
                style={{
                  marginLeft: "3%",
                  marginTop: "3%",
                  height: "3%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "2%",
                    paddingTop: "1%",
                  }}
                >
                  <h6
                    style={{
                      color: "rgba(81, 92, 111, 0.59)",
                      fontWeight: "100",
                      fontSize: "14px",
                      fontFamily: "GraphikMedium",
                    }}
                  >
                    Profile
                  </h6>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "3%",
                  marginTop: "2%",
                  height: "4%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {logedin_number != null ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "2%",
                      paddingTop: "1%",
                    }}
                  >
                    <FiLogIn
                      style={{
                        color: "rgba(81, 92, 111, 0.59)",
                        width: "7%",
                        height: "7%",
                      }}
                    />
                    <Link
                      to={"/"}
                      onClick={() => logout()}
                      style={{ textDecoration: "none" }}
                    >
                      <h5
                        style={{
                          marginLeft: "25%",
                          color: "rgba(81, 92, 111, 0.59)",
                          fontWeight: "100",
                          fontSize: "10px",
                          fontFamily: "GraphikMedium",
                        }}
                      >
                        Logout
                      </h5>
                    </Link>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "2%",
                      paddingTop: "1%",
                    }}
                  >
                    <FiLogIn
                      style={{
                        color: "rgba(81, 92, 111, 0.59)",
                        width: "7%",
                        height: "7%",
                      }}
                    />
                    <Link
                      to={"/SchoolLogin"}
                      style={{ textDecoration: "none" }}
                    >
                      <h5
                        style={{
                          color: "rgba(81, 92, 111, 0.59)",
                          marginLeft: "25%",
                          fontWeight: "100",
                          fontSize: "10px",
                          fontFamily: "GraphikMedium",
                        }}
                      >
                        Login
                      </h5>
                    </Link>
                  </div>
                )}
              </div>
              <div
                style={{
                  marginTop: "5%",
                  marginBottom: "4%",
                  width: "96%",
                  height: "0.1vh",
                  borderWidth: "0",
                  backgroundColor: "rgba(81, 92, 111, 0.15)",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "2%",
                  marginRight: "2%",
                }}
              ></div>

              <div
                style={{
                  marginLeft: "3%",
                  marginTop: "3%",
                  height: "3%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "2%",
                    paddingTop: "1%",
                  }}
                >
                  <h6
                    style={{
                      color: "rgba(81, 92, 111, 0.59)",
                      fontWeight: "100",
                      fontSize: "14px",
                      fontFamily: "GraphikMedium",
                    }}
                  >
                    Communicate
                  </h6>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "3%",
                  marginTop: "2%",
                  height: "4%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "2%",
                    paddingTop: "1%",
                  }}
                >
                  <BsHeadset
                    style={{
                      color: "rgba(81, 92, 111, 0.59)",
                      width: "7%",
                      height: "7%",
                    }}
                  />
                  <h5
                    style={{
                      color: "rgba(81, 92, 111, 0.59)",
                      marginLeft: "3%",
                      fontWeight: "100",
                      fontSize: "10px",
                      fontFamily: "GraphikMedium",
                    }}
                  >
                    Contact Us
                  </h5>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  marginTop: "2%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={acunt} height={"70%"} width={"70%"} style={{}} />
              </div>
            </div>
          </Modal>

          {/* categoriese modal */}
          <Modal
            onRequestClose={() => setcategoriese(false)}
            isOpen={categoriese}
            style={{
              overlay: {
                backgroundColor: "rgba(115, 115, 115, 0.55)",
              },
              content: {
                marginTop: "-4%",
                position: "absolute",
                height: "100%",
                left: "67%",
                width: "33.5%",
                //  bottom: '20%',

                borderWidth: 0,
                //  border: '1px solid #ccc',
                background: "white",
              },
            }}
          >
            <div
              style={{
                marginTop: "-5%",
                marginLeft: "-5%",
                overflow: "hidden",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  paddingTop: "2%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  backgroundColor: "#53b175",
                  width: "100%",
                  height: "10%",
                }}
              >
                <h3
                  style={{
                    fontFamily: "GraphikRegular",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Categoriese
                </h3>
              </div>
              <div
                className="body"
                style={{
                  marginLeft: "4%",
                  marginTop: "5%",
                  width: "92%",
                  height: "95vh",
                  overflowY: "auto",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                {catags != undefined ? (
                  <>
                    {" "}
                    {catags.length > 0 ? (
                      <>
                        {catags.map((item) => {
                          if (item.product_count > 0) {
                            return (
                              <div style={{ width: "100%" }}>
                                <Link
                                  to={"/viewmore"}
                                  state={{ item }}
                                  style={{
                                    textDecoration: "none",
                                    marginTop: "2%",
                                    borderWidth: 0,
                                    backgroundColor: "white",
                                  }}
                                >
                                  <h3
                                    style={{
                                      fontWeight: "400",
                                      color: "rgba(81, 92, 111, 0.59)",
                                      fontFamily: "GraphikRegular",
                                      fontSize: "14px",
                                    }}
                                  >
                                    {item.name}
                                  </h3>
                                </Link>
                                <div
                                  style={{
                                    marginTop: "5%",
                                    marginBottom: "4%",
                                    width: "100%",
                                    height: "0.1vh",
                                    borderWidth: "0",
                                    backgroundColor: "rgba(81, 92, 111, 0.15)",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                ></div>
                              </div>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </>
                    ) : (
                      <>
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "GraphikMedium",
                              fontSize: "12px",
                              color: "grey",
                              fontWeight: "500",
                            }}
                          >
                            This Store don't have any listed Categoriese
                          </h3>
                        </div>
                      </>
                    )}
                  </>
                ) : null}
              </div>
            </div>
          </Modal>

          <Footer />
        </div>
      ) : (
        <div
          style={{
            overflow: "hidden",
            flex: 1,
            backgroundColor: "white",
            marginLeft: "1.5%",
            marginRight: "1.5%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              width: "100%",
              height: "5vh",
              marginTop: "6%",
            }}
          >
            <div style={{ marginLeft: "4%" }}>
              <Link to="/mobile">
                <AiOutlineLeft
                  style={{ color: "black", width: "80%", height: "80%" }}
                />
              </Link>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "65%", height: "35vh" }}>
              <img src={otp11} height={"100%"} width={"100%"} style={{}} />
            </div>
          </div>

          <div
            style={{
              marginLeft: "4%",
              marginTop: "9%",
              width: "100%",
              height: "3vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <h3
              style={{
                fontSize: "12px",
                fontFamily: "GraphikMedium",
                fontWeight: "100",
                color: "#515C6F",
              }}
            >
              Enter OTP
            </h3>
          </div>
          <div
            style={{
              marginLeft: "4%",
              width: "100%",
              height: "3vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <p
              style={{
                fontSize: "8px",
                fontFamily: "GraphikMedium",
                fontWeight: "100",
                color: messagecolor,
              }}
            >
              {message}
            </p>
          </div>

          <div
            style={{
              marginTop: "5%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ display: "flex", width: "80%" }}>
              <Khana1>
                <Inputsearch1
                  value={pin1}
                  onFocus={() => setFocused("pin1")}
                  onKeyDown={handleKeyPress}
                  ref={pin1ref}
                  onChange={(e) => {
                    if (
                      e.target.value >= 0 &&
                      e.target.value < 10 &&
                      e.target.value != ""
                    ) {
                      setpin1(e.target.value);

                      if (pin1 != null) {
                        pin2ref.current.focus();
                      }
                    } else {
                      setpin1("");
                    }
                  }}
                  type="text"
                  style={{
                    backgroundColor: "rgba(249, 251, 231, 0.6)",
                    color: "black",
                    paddingLeft: "35%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: border,
                  }}
                />
              </Khana1>
              <Khana1>
                <Inputsearch1
                  type="text"
                  ref={pin2ref}
                  onFocus={() => setFocused("pin2")}
                  onKeyDown={handleKeyPress}
                  value={pin2}
                  onChange={(e) => {
                    if (
                      e.target.value >= 0 &&
                      e.target.value < 10 &&
                      e.target.value != ""
                    ) {
                      setpin2(e.target.value);

                      if (pin2 != null) {
                        pin3ref.current.focus();
                      }
                    } else {
                      setpin2("");
                    }
                  }}
                  style={{
                    backgroundColor: "rgba(249, 251, 231, 0.6)",
                    color: "black",
                    paddingLeft: "35%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: border,
                  }}
                />
              </Khana1>
              <Khana1>
                <Inputsearch1
                  type="text"
                  ref={pin3ref}
                  onFocus={() => setFocused("pin3")}
                  onKeyDown={handleKeyPress}
                  value={pin3}
                  onChange={(e) => {
                    if (
                      e.target.value >= 0 &&
                      e.target.value < 10 &&
                      e.target.value != ""
                    ) {
                      setpin3(e.target.value);

                      if (pin3 != null) {
                        pin4ref.current.focus();
                      }
                    } else {
                      setpin3("");
                    }
                  }}
                  style={{
                    backgroundColor: "rgba(249, 251, 231, 0.6)",
                    color: "black",
                    paddingLeft: "35%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: border,
                  }}
                />
              </Khana1>
              <Khana1>
                <Inputsearch1
                  type="text"
                  ref={pin4ref}
                  onFocus={() => setFocused("pin4")}
                  onKeyDown={handleKeyPress}
                  value={pin4}
                  onChange={(e) => {
                    if (
                      e.target.value >= 0 &&
                      e.target.value < 10 &&
                      e.target.value != ""
                    ) {
                      setpin4(e.target.value);

                      if (pin4 != null) {
                        pin5ref.current.focus();
                      }
                    } else {
                      setpin4("");
                    }
                  }}
                  style={{
                    backgroundColor: "rgba(249, 251, 231, 0.6)",
                    color: "black",
                    paddingLeft: "35%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: border,
                  }}
                />
              </Khana1>
              <Khana1>
                <Inputsearch1
                  value={pin5}
                  onFocus={() => setFocused("pin5")}
                  onKeyDown={handleKeyPress}
                  ref={pin5ref}
                  onChange={(e) => {
                    if (
                      e.target.value >= 0 &&
                      e.target.value < 10 &&
                      e.target.value != ""
                    ) {
                      setpin5(e.target.value);

                      if (pin5 != null) {
                        pin6ref.current.focus();
                      }
                    } else {
                      setpin5("");
                    }
                  }}
                  type="text"
                  style={{
                    backgroundColor: "rgba(249, 251, 231, 0.6)",
                    color: "black",
                    paddingLeft: "35%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: border,
                  }}
                />
              </Khana1>
              <Khana1>
                <Inputsearch1
                  value={pin6}
                  onFocus={() => setFocused("pin6")}
                  onKeyDown={handleKeyPress}
                  ref={pin6ref}
                  onChange={(e) => {
                    if (
                      e.target.value >= 0 &&
                      e.target.value < 10 &&
                      e.target.value != ""
                    ) {
                      setpin6(e.target.value);
                    } else {
                      setpin6("");
                    }
                  }}
                  type="text"
                  style={{
                    backgroundColor: "rgba(249, 251, 231, 0.6)",
                    color: "black",
                    paddingLeft: "35%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: border,
                  }}
                />
              </Khana1>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              marginTop: "5%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "60%",
                borderWidth: 0.5,
                borderStyle: "solid",
                borderColor: "rgba(108, 113, 119, 0.15)",
              }}
            >
              {" "}
            </div>
          </div>

          <div
            style={{
              marginTop: "10%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                marginLeft: "6%",
                marginRight: "6%",
                alignItems: "center",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <button
                disabled={disable}
                onClick={() => {
                  setclr("#C4C4C4");
                  getcode();
                  setshown(true);
                  setdisable(true);
                }}
                style={{
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderWidth: 0,
                }}
              >
                <div style={{ marginRight: "4%" }}>
                  <FiMail style={{ color: clr, height: "95%", width: "95%" }} />
                </div>
                <h3
                  style={{
                    fontSize: "9px",
                    fontFamily: "GraphikMedium",
                    fontWeight: "100",
                    color: clr,
                  }}
                >
                  Resend Code
                </h3>
              </button>

              {shown == true ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "16%",
                  }}
                >
                  <h2 style={{ fontSize: "10px" }}>00 :</h2>
                  <div style={{ marginLeft: "3%" }}>
                    <Countdown date={Date.now() + 30000} renderer={renderer} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {pin1 != "" &&
          pin2 != "" &&
          pin3 != "" &&
          pin4 != "" &&
          pin5 != "" &&
          pin6 != "" ? (
            <div
              style={{
                marginBottom: "10%",
                marginTop: "10%",
                width: "100%",
                height: "5vh",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  borderWidth: 0,
                  width: "75%",
                  marginTop: "10%",
                  height: "6vh",
                  backgroundColor: "#53b175",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => verifycode()}
              >
                <h4
                  style={{
                    fontSize: "10px",
                    fontWeight: "100",
                    color: "white",
                    fontFamily: "Montserrat-Medium",
                  }}
                >
                  Verify Code
                </h4>
              </button>
            </div>
          ) : (
            <div
              style={{
                marginBottom: "10%",
                marginTop: "10%",
                width: "100%",
                height: "5vh",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                disabled={true}
                style={{
                  borderWidth: 0,
                  width: "75%",
                  marginTop: "10%",
                  height: "6vh",
                  backgroundColor: "#71BD91",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => verifycode()}
              >
                <h4
                  style={{
                    fontSize: "10px",
                    fontWeight: "100",
                    color: "white",
                    fontFamily: "Montserrat-Medium",
                  }}
                >
                  Verify Code
                </h4>
              </button>
            </div>
          )}
        </div>
      )}
      <Toaster />
    </>
  );
};

const Shoping = styled.a`
  margin-right: 2%;
`;
const C = styled.div`
  margin-left: 37%;
`;
const Mainheading = styled.h3``;
const Body = styled.div`
  margin-left: 2%;
  margin-right: 2%; ;
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Inputsearch = styled.input`
  border-width: 0;
  outline: none !important;
  border-radius: 10px;
  position: relative;
  width: 60%;
  height: 95%;
  color: #e8dfdf;
  border-color: #e8dfdf;
`;
const Inputsearch1 = styled.input`
  border-width: 0;
  outline: none !important;
  border-radius: 5px;
  position: relative;
  width: 60%;
  height: 95%;
  color: #e8dfdf;
  border-color: #e8dfdf;
`;

const Span = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Fin = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1%;
  margin-bottom: 1%;
  height: 40vh;
`;

const H_5 = styled.h5`
  margin-left: 5%;
  padding-top: 15%;
  //margin-top: 9vh;
`;

const H3 = styled.h3``;

const Div = styled.div`
  display: flex;
  padding-top: 10%;
`;

const P1 = styled.div`
  height: 60vh;
  width: 100%;
  background-color: #ffd20a;
`;
const P2 = styled.div`
  height: 40vh;
  width: 100%;
`;

const Sb = styled.h3`
  color: white;
`;
const Sbmt = styled.div`
  height: 20vh;
`;

const Cir = styled.div`
  background-color: #ffd20a;
  border-color: #ffd20a;
  width: 55%;
  margin-left: 23%;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  border-style: solid;
  border-radius: 20px;
`;
const Amage = styled.div`
  margin-left: 28%;
  margin-top: 6%;
  height: 100%;
  width: 90%;
`;
const Mobup = styled.div`
  background-color: white;
  background-color: white;
  width: 35%;
  height: 50vh;
  margin-top: -7vh;
  margin-left: 33.2%;
  box-shadow: 0px 6px 8px rgba(44, 44, 44, 255),
    0px 3px 4px rgba(44, 44, 44, 255), 0px 1px 16px rgba(44, 44, 44, 255);
  border-radius: 20px;
`;
const Mobup_mob = styled.div`
  background-color: white;
  background-color: white;
  width: 55%;
  height: 35vh;
  margin-top: -7vh;
  margin-left: 24.2%;
  box-shadow: 0px 6px 8px rgba(44, 44, 44, 255),
    0px 3px 4px rgba(44, 44, 44, 255), 0px 1px 16px rgba(44, 44, 44, 255);
  border-radius: 20px;
`;

const Khana = styled.div`
  background-color: #f0ebeb;
  margin-left: 4%;
  width: 12%;
  border-radius: 10px;
  height: 7vh;
  box-shadow: 0px 6px 8px #a09e96, 0px 3px 4px #a09e96, 0px 1px 16px #a09e96;
`;
const Khana1 = styled.div`
  background-color: rgba(249, 251, 231, 0.6);
  margin-left: 4%;
  margin-top: 2%;
  width: 20%;
  border-radius: 5px;
  height: 6vh; ;
`;

const style = { color: "black", margin: "-20%" };
const sty = { color: "black", margin: "15%" };
{
  /*         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 20, width: '10%', height: '5.8vh', backgroundColor: '#53b175' }}>
                                                <button disabled={disable}
                                                    onClick={() => { getcode; setshow(true); setdisable(true) }}
                                                    style={{ backgroundColor: '#53b175', borderWidth: 0 }}>
                                                   
                                                    <AiOutlineRight size={10} style={{ color: 'white' }} />
                                                </button>
                                            </div>*/
}
