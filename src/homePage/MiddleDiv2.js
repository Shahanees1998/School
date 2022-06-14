import React from 'react';
import styled from 'styled-components';

function MiddleDiv2() {
  return (
    <Container>
        <h2>Meet the needs of students from your school through small payments</h2>
        <div className='imgsDiv'>
            <div className='imgDiv'>
                <img src={require('../imgs/table.png')}/>
            </div>
            <div className='imgDiv'>
                <img src={require('../imgs/books.png')}/>
            </div>
            <div className='imgDiv'>
                <img src={require('../imgs/bicycle.png')}/>
            </div>
            <div className='imgDiv'>
                <img src={require('../imgs/bag.png')}/>
            </div>
        </div>
    </Container>
  )
}

export default MiddleDiv2;

const Container = styled.div`

background-color: white;
height: 37vh;
width: 100%;
display: flex;
flex-direction: column;
h2 {
    text-align: center;
}
.imgsDiv {
    //background-color: aqua;
    height: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.imgDiv {
    width: 15%;
    height: 80%;
}
img {
    height: 100%;
    width: 100%;
}


`