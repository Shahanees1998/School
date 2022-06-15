import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function SplashScreen() {

  const [time, settime] = useState(false);
  let navigate = useNavigate();


  setTimeout(() => {
    navigate('home')
  }, 3000);

  
  return (
    <Container>
        
            <h1>StudenBook</h1>
            <div className='h1BelowDiv'></div>
            <h2>Big Needs,Small Payments</h2>
          
        
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
    height: 1px;
    margin-top: -3.5%;
    background-color: grey;
}
h2 {
    font-size: 35px;
}


`