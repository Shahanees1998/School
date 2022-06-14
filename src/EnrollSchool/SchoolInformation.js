import React, {useState} from 'react';
import styled from 'styled-components';
import { getDatabase, ref, set, onValue,push } from "firebase/database";
import app from '../firebase'
const db = getDatabase(app);

function SchoolInformation(props) {

    const[schoolInfo, setSchoolInfo] = useState(
        {schoolName:'',schoolAddress:'',principalName:'',relationship:'',
            phoneNumber:'',items:''})

    function backHandler() {
        var val = "register"
        props.onClick(val);
    }

    function nextHandler() {
        var val = "payment"

        set(ref(db, 'School/-N4WLz1ejar-mNf4xdcT' ), schoolInfo).then(()=>{
            console.log('data saved successfully')
        }).catch(err=>{
            console.log(err)
        });


        props.onClick(val);
    }

    const onChangeHandler=(event)=>{
        const {name,value} = event.target;
        setSchoolInfo({...schoolInfo,[name]:value});
        console.log('shcool info', schoolInfo);
    }


  return (
    <Container>
            <div className='schoolNameSchoolAddressDiv'>
                <div className='schoolNameDiv'>
                    <div className='h3Div'>
                        <h3>School Name</h3>
                    </div>
                    <div className='inputDiv'>
                        <input placeholder='enter schoolName' name="schoolName" value={schoolInfo.schoolName}
                        onChange={onChangeHandler}/>
                    </div>
                </div>
                <div className='schoolAddressDiv'>
                    <div className='h3Div'>
                        <h3>School Address</h3>
                    </div>
                    <div className='inputDiv'>
                        <input placeholder='enter school address' name="schoolAddress" value={schoolInfo.schoolAddress}
                               onChange={onChangeHandler}/>
                    </div>
                </div>
            </div>


            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Name of Principle</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input placeholder='enter principleName' name="principalName" value={schoolInfo.principalName}
                               onChange={onChangeHandler} />
                    </div>
                </div>
            </div>

            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>RelationShip to School</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input placeholder='enter relationShip' name="relationship" value={schoolInfo.relationship}
                               onChange={onChangeHandler} />
                    </div>
                </div>
            </div>

            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Phone Number</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input placeholder='enter phone number' name="phoneNumber" value={schoolInfo.phoneNumber}
                               onChange={onChangeHandler} />
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
                    <p>StudentBook does not sell your information to anyone</p>

                </div>

            </div>

        </Container >
  )
}

export default SchoolInformation;


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




`