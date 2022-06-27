import React, { useState } from "react";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import user from "../../assets/Images/user.svg";
import document from "../../assets/Images/document.svg";
import bank from "../../assets/Images/bank.svg";

function Payment(props) {
  const [bankInfo, setBankInfo] = useState({
    bankName: "",
    accountName: "",
    accoutNumber: "",
    routingNumber: "",
  });
  function backHandler() {
    var val = "schoolInformation";
    props.onClick(val);
  }
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name != "routingNumber") {
      setBankInfo({ ...bankInfo, [name]: value });
      console.log("shcool info", name, value);
    } else {
      var letters = /^$|^[0-9\b]+$/;
      if (value.match(letters)) {
        if (value >= 0 && value < 9999999999) {
          setBankInfo({ ...bankInfo, [name]: value });
        } else {
          //  let isnum = /^\d+$/. test(value)

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
                  length of number should be 11
                </h3>
              </div>
            </div>,
            { duration: 1000 }
          );
        }
      } else {
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
                invalid key presed
              </h3>
            </div>
          </div>,
          { duration: 1000 }
        );
      }
    }
  };
  function nextHandler() {
    if (
      bankInfo.accountName == "" ||
      bankInfo.accoutNumber == "" ||
      bankInfo.bankName == "" ||
      bankInfo.routingNumber == ""
    ) {
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
      var val = "complete";
      props.onClick(val);
    }
  }
  const InputsList = [
    {
      id: 1,
      image: bank,
      value: bankInfo.bankName,
      name: "bankName",
      onch: onChangeHandler,
      ph: "Enter Bank Name",
    },
    {
      id: 2,
      image: bank,
      value: bankInfo.routingNumber,
      name: "routingNumber",

      onch: onChangeHandler,
      ph: "Enter Routing Number",
    },
    {
      id: 3,
      image: user,
      value: bankInfo.accountName,
      name: "accountName",

      onch: onChangeHandler,
      ph: "Enter Account Name",
    },
    {
      id: 4,
      image: document,
      value: bankInfo.accoutNumber,
      name: "accoutNumber",

      onch: onChangeHandler,
      ph: "Enter Account Number",
    },
  ];

  return (
    <Container>
      {InputsList.map((item) => {
        return (
          <div id={item.id} className="inputsConatiner">
            <img src={item.image} style={{ width: "30px", height: "30px" }} />
            <input
              className="inputDiv"
              style={{ outline: "none" }}
              placeholder={item.ph}
              name={item.name}
              value={item.value}
              onChange={item.onch}
            />
          </div>
        );
      })}

      <button
        className="inputsConatiner button blueBack"
        onClick={() => nextHandler()}
      >
        <h3 className="whiteText"> Next</h3>
      </button>
      <button
        className="inputsConatiner button"
        style={{ marginTop: -20 }}
        onClick={() => backHandler()}
      >
        <h3 className="blueText">Back</h3>
      </button>
      <Toaster />
    </Container>
  );
}

export default Payment;

const Container = styled.div`
  //background-color: green;
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
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
`;
