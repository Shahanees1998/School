import React from 'react';
import styled from 'styled-components';

function CompleteAlumni(props) {

    function doneHandler() {
        var val = 'contactus';
        props.onClick(val);
        
    }
    return (
        <Container>
            <div className='paragraphDiv'>
                <div className='h4Div'>
                    <h4>Thank you for registering.You will be notified within one business day when your school is enrolled</h4>
                </div>
            </div>

            <div className='btnMainDiv'>
                <div className='btnInnerDiv'>
                    <div className='btnDiv'>
                        <button onClick={()=>doneHandler()}>Done</button>
                    </div>
                </div>
            </div>

            <div className='pMainDiv'>
                <div className='pInnerDiv'>
                    <p>StudentBook does not sell your information to anyone</p>
                </div>
            </div>

        </Container>
    )
}

export default CompleteAlumni;

const Container = styled.div`

background-color: white;
height: 78vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
.paragraphDiv {
    //background-color: yellow;
    height: 60%;
    width: 94%;
    display: flex;
    align-items: center;
    //justify-content: center;
}
.h4Div {
    //background-color: aqua;
    height: 90%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}
h4 {
    text-align: center;
}
.btnMainDiv {
    //background-color: aqua;
    height: 18%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.btnInnerDiv {
    //background-color: red;
    height: 100%;
    width: 92%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btnDiv {
    //background-color: gray;
    height: 50%;
    width: 16%;
    //border: 1px solid black;
    
}
button {
    background-color: gray;
    height: 100%;
    width: 100%;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    border: 0px;
}
.pMainDiv {
    //background-color: brown;
    height: 14%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pInnerDiv {
    //background-color: yellowgreen;
    height: 100%;
    width: 94%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
}
p {
    text-align: right;
}


`