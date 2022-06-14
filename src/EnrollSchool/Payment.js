import React from 'react';
import styled from 'styled-components';

function Payment(props) {

    function backHandler() {
        var val = 'schoolInformation';
        props.onClick(val);
        
    }

    function nextHandler() {
        var val = 'complete';
        props.onClick(val);
        
    }


  return (
    <Container>
            <div className='schoolNameSchoolAddressDiv'>
                <div className='schoolNameDiv'>
                    <div className='h3Div'>
                        <h3>Name of the bank</h3>
                    </div>
                    <div className='inputDiv'>
                        <input placeholder='enter bankName' />
                    </div>
                </div>
                <div className='schoolAddressDiv'>
                    <div className='h3Div'>
                        <h3>Routing Number</h3>
                    </div>
                    <div className='inputDiv'>
                        <input placeholder='enter routing Number' />
                    </div>
                </div>
            </div>


            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Name of the account</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input placeholder='enter accountName' />
                    </div>
                </div>
            </div>

            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Account number</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input placeholder='enter accoutNumber' />
                    </div>
                </div>
            </div>

            

            <div className='btnMainDiv'>
                <div className='btnInnerDiv'>
                    <div className='twoBtnsDiv'>
                    <div className='btnDiv'>
                        <button onClick={()=>backHandler()}>Back</button>
                    </div>
                    <div className='btnDiv'>
                        <button onClick={()=>nextHandler()}>Next</button>
                    </div>
                    </div>
                    
                </div>
            </div>

            <div className='pMainDiv'>
                <div className='pInnerDiv'>
                    <p>StudentBook does not sell your information to anyone</p>
                </div>
            </div>

        </Container >
  )
}

export default Payment;


const Container = styled.div`

//background-color: green;
height: 78vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
.schoolNameSchoolAddressDiv {
    //background-color: yellow;
    display: flex;
    height: 18%;
}
.schoolNameDiv {
    height: 100%;
    width: 20%;
    //background-color: aqua;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.schoolAddressDiv {
    height: 100%;
    width: 45%;
    //background-color: aliceblue;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.h3Div {
    //background-color: blueviolet;
    height: 50%;
    width: 90%;
    display: flex;
    align-items: center;
}
.inputDiv {
    height: 50%;
    width: 90%;
    //background-color: azure;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    border: 1px solid black;
    //border-color: brown;
}
input {
    border: 0px;
}
.emailMainDiv {
    //background-color: yellow;
    height: 18%;
}
.emailDiv {
    //background-color: aqua;
    height: 100%;
    width: 20%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.h3Div2 {
    //background-color: blueviolet;
    height: 50%;
    width: 90%;
    display: flex;
    align-items: center;
}
.emailInputDiv {
    //background-color: aliceblue;
    height: 50%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    border: 1px solid black;
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
    width: 94%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.twoBtnsDiv {
    //background-color: brown;
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btnDiv {
    //background-color: gray;
    height: 50%;
    width: 45%;
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