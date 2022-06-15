import React from 'react';
import styled from 'styled-components';


function MiddleDiv1() {
  return (
    <Container>
        <div className='innerDiv'>
            <div className='bigNeedsDiv'>
                <h1 className='needsText'>Big Needs Small Payments</h1>
            </div>
            <div className='rightDiv'>
                <h4 className='donatedText'>1.5 crores donated and counting</h4>
            </div>
        </div>
    </Container>
  )
}

export default MiddleDiv1;

const Container = styled.div`

background-color: white;
height: 30vh;
width: 100%;
display: flex;
justify-content: flex-end;
.innerDiv {
    //background-color: yellow;
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.bigNeedsDiv {
    //background-color: aqua;
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
}
h1 {
    font-size: 83px;
    font-weight: bold;
    text-align: center;
}
.rightDiv {
    //background-color: aliceblue;
    height: 61%;
    width: 13.3%;
    border-radius: 50%;
    margin-right: 3%;
    display: flex;
    align-items: center;
    background-color: skyblue;
}
h4 {
    text-align: center;
    color: white;

}
.needsText {
 font-size: 70px;
}
.donatedText {
 font-size:15px;
}
@media screen and (max-width: 750px) {
    .needsText {
 font-size: 50px;
}
.donatedText {
 font-size: 10px;
}

}
`