import React,{useState} from 'react';
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';

function Payment(props) {
const [bankName, setBankName] = useState('')
const [accountName, setAccountName] = useState('')
const [accoutNumber, setAccountNumber] = useState('')
const [routingNumber, setRoutingNumber] = useState('')
    function backHandler() {
        var val = 'schoolInformation';
        props.onClick(val);
        
    }

    function nextHandler() {
        if(accountName == '' || accoutNumber == '' || bankName =='' || routingNumber == '')
        {
            toast.custom(
                <div style={{ marginTop: '5%',width: '100%', height: '6vh',  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
    
                    <div style={{ alignSelf: 'flex-start', width: '30%', height: '100%', borderLeftWidth: '8px', borderColor: 'red', borderStyle: 'solid', borderBottomWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderRadius: 5, backgroundColor: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h3 style={{ color: '#515C6F', fontFamily: 'GraphikMedium', fontWeight: '100', fontSize: '12px' }}>Kindly fill all the fields</h3>
                    </div>
                </div>, { duration: 1000 })
        }
        else {
            var val = 'complete';
            props.onClick(val);
        }
    
        
    }


  return (
    <Container>
            <div className='schoolNameSchoolAddressDiv'>
                <div className='schoolNameDiv'>
                    <div className='h3Div'>
                        <h3>Name of the bank</h3>
                    </div>
                    <div className='inputDiv'>
                        <input style={{outline: 'none'}} placeholder='Enter bankName' onChange={(e) => setBankName(e.target.value)}/>
                    </div>
                </div>
                <div className='schoolAddressDiv'>
                    <div className='h3Div'>
                        <h3>Routing Number</h3>
                    </div>
                    <div className='inputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter routing Number'  onChange={(e) => setRoutingNumber(e.target.value)}/>
                    </div>
                </div>
            </div>


            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Name of the account</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter accountName'  onChange={(e) => setAccountName(e.target.value)}/>
                    </div>
                </div>
            </div>

            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Account number</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter accoutNumber'  onChange={(e) => setAccountNumber(e.target.value)}/>
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
            <Toaster />

        </Container >
  )
}

export default Payment;


const Container = styled.div`

//background-color: green;
height: 75vh;
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