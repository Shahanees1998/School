import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Footer from './homePage/Footer';

function SplashScreen() {

  const [time, settime] = useState(false);
  let navigate = useNavigate();


  setTimeout(() => {
    navigate('home')
  }, 10000);

  
  return (
    <Container>
        
            <h1>StudenBook.com</h1>
            <div className='h1BelowDiv'></div>
            <h2>Big Needs,Small Payments</h2>
            <h2>Requirements- vo.1</h2>
        
    </Container>
  )
}

export default SplashScreen;

const Container = styled.div`

background-color: white;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1 {
    font-size: 70px;
}
.h1BelowDiv {
    width: 43%;
    height: 1%;
    margin-top: -4.5%;
    background-color: black;
}
h2 {
    font-size: 35px;
}


`