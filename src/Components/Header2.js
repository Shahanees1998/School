import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaUserCircle } from "react-icons/fa";


function Header2() {
  return (
    <Container>
        <div className='innerDiv'>
            <div className='leftDiv'>
                <div className='imgDiv'>
                    <img src={require('../imgs/userImg.png')} className='userImg'/>
                </div>
                <h3>StudenBook</h3>
            </div>
            <div className='rightDiv'>
                <div className='needsMainDiv'>
                <div  className='needsDiv'>
                <button className='loginBtn'>Needs</button>
                </div>
                </div>
                <div className='aboutDiv'>
                    <button className='aboutBtn'>About</button>
                </div>
                <div className='loginAndIconDiv'>
                    <FaUserCircle size={50}/>
                    <div className='loginDiv'>
                        <button className='loginBtn'>admin@sbhs</button>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Header2;

const Container = styled.div`
  background-color: gray;
  height: 10vh;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  .innerDiv {
      //background-color: brown;
      height: 100%;
      width: 95%;
      display: flex;
  }
  .leftDiv {
      //background-color: green;
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;
  }
  .imgDiv {
      //background-color: yellow;
      height: 95%;
      width: 13%;
      border-radius: 70%;
      overflow: hidden;
  }
  .userImg {
      width: 100%;
      height: 100%;
  }
  h3 {
      font-size: 25px;
      font-weight: bold;
      color: white;
      margin-left: 2%;
  }
  .rightDiv {
      //background-color: blueviolet;
      height: 100%;
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .needsMainDiv {
      //background-color: #EEEEEE;
      width: 45%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-radius: 5px;
  }
  .needsDiv {
    background-Color: green;
    width: 35%;
    height: 100%;
  }
  
  
  .aboutDiv {
      background-color: red;
      height: 80%;
      width: 20%;
      
  }
  .aboutBtn {
      background-color: gray;
      height: 100%;
      width: 100%;
      font-size: 20px;
      color: white;
      border: 0px;
  }
  .loginAndIconDiv {
      //background-color: yellowgreen;
      width: 30%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: space-around;
  }
  .loginDiv {
      //background-color: red;
      height: 100%;
      width: 60%;
  }
  .loginBtn {
      background-color: gray;
      height: 100%;
      width: 100%;
      font-size: 20px;
      color: white;
      border: 0px;

  }

   `