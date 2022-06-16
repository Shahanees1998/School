import React,{useState} from 'react';
import styled from 'styled-components';
import { getDatabase, ref, set, onValue,push } from "firebase/database";
import app from '../firebase'
import toast, { Toaster } from 'react-hot-toast';
import {useDispatch} from "react-redux";
import setData, {setAlumniKey} from "../Redux/actions";

const db = getDatabase(app);

function RegisterAlumni(props) {
    const dispatch = useDispatch()
    // set data in redux

    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[confirmPass,setConfirmPass] = useState('');


    const onChangeHandler= (event)=>{
        console.log('name',event.target.name);
        const inputName = event.target.name;
        const inputValue = event.target.value;
        switch (inputName){
            case 'firstName':
                setFirstName(inputValue)
                break;
            case 'lastName':
                setLastName(inputValue)
                break;
            case 'email':
                setEmail(inputValue)
                break;
            case 'password':
                setPassword(inputValue)
                break;
            case 'confirmPass':
                setConfirmPass(inputValue)
                break;
            default:
                console.log('default')
                break;

        }
    }


    function nextHandler() {
        if(firstName == '' || lastName == '' || email =='' || password == '' || confirmPass == '')
        {
            toast.custom(
                <div style={{ marginTop: '5%',width: '100%', height: '6vh',  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
    
                    <div style={{ alignSelf: 'flex-start', width: '30%', height: '100%', borderLeftWidth: '8px', borderColor: 'red', borderStyle: 'solid', borderBottomWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderRadius: 5, backgroundColor: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h3 style={{ color: '#515C6F', fontFamily: 'GraphikMedium', fontWeight: '100', fontSize: '12px' }}>Kindly fill all the fields</h3>
                    </div>
                </div>, { duration: 1000 })
        }
        else {
            var val = "schoolInformation";

            var alumnikey = push(ref(db, 'users/alumni' ), {
                firstName,
                lastName,
                email,
                password,
                confirmPass,approve:false
            })
            props.ongetval(alumnikey.key)
            console.log('storing alumni')
            dispatch(setAlumniKey(alumnikey.key))

            props.onClick(val);
        }
      
    }

    return (
        <Container>
            <div className='firstNameLastNameDiv'>
                <div className='firstNameDiv'>
                    <div className='h3Div'>
                        <h3>First Name</h3>
                    </div>
                    <div className='inputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter firstname' name="firstName" value={firstName} onChange={onChangeHandler} />
                    </div>
                </div>
                <div className='lastNameDiv'>
                    <div className='h3Div'>
                        <h3>Last Name</h3>
                    </div>
                    <div className='inputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter lastName' name="lastName" value={lastName} onChange={onChangeHandler}/>
                    </div>
                </div>
            </div>


            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Email</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter email' name="email" value={email} onChange={onChangeHandler} />
                    </div>
                </div>
            </div>

            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Password</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter password' name="password" value={password} onChange={onChangeHandler} />
                    </div>
                </div>
            </div>

            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Confirm Password</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter confirm password'  name="confirmPass" value={confirmPass} onChange={onChangeHandler}/>
                    </div>
                </div>
            </div>

            <div className='btnMainDiv'>
                <div className='btnInnerDiv'>
                    <div className='btnDiv'>
                        <button onClick={()=>nextHandler()}>Next</button>
                    </div>
                    <p>StudentBook does not sell your information to anyone</p>

                </div>

            </div>
            <Toaster />

        </Container >
    )
}

export default RegisterAlumni;

const Container = styled.div`

//background-color: green;
height: 75vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
.firstNameLastNameDiv {
    //background-color: yellow;
    display: flex;
    height: 18%;
}
.firstNameDiv {
    height: 100%;
    width: 20%;
    //background-color: aqua;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.lastNameDiv {
    height: 100%;
    width: 20%;
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




`