import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/Header';
import MiddleDiv1 from './MiddleDiv1';
import MiddleDiv2 from './MiddleDiv2';
import {useNavigate} from 'react-router-dom';
import setData from '../Redux/actions';
import { useSelector, useDispatch } from 'react-redux'

function HomePgae() {
    const dispatch = useDispatch()
    dispatch(setData('hello data'))

    const navigate = useNavigate();


    function enrollSchollHandler() {
        navigate('/registerLine')
    }

    function alumniRegisterationHandler() {
        navigate('/toAlumniRegisterPage')
        
    }




    return (
        <>
        <Header/>
        <MiddleDiv1/>
        <MiddleDiv2/>
        <Container>
            <div className='btnDiv'>
                <button onClick={()=>enrollSchollHandler()}>
                    <h3 className='enrollText'>Enroll School</h3>
                    <h4 className='text'>(for school admins)</h4>
                </button>
            </div>
            <div className='btnDiv'>
                <button onClick={()=>alumniRegisterationHandler()}>
                    <h3 className='enrollText'>Join your School</h3>
                    <h4 className='text'>(for school alumni)</h4>
                </button>
            </div>
        </Container>
        </>
    )
}

export default HomePgae;

const Container = styled.div`

//background-color: brown;
height: 16vh;
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
overflow-y: hidden;
.btnDiv {
    //background-color: green;
    height: 60%;
    width: 15%;
    display: flex;
    //border-radius: 5%;
}
button {
    background-color: grey;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border-width: 0px;
    
}
h3 {
    line-height: 20%;
    text-align: center;
    margin-bottom: -1%;
    font-size: 20px;
}
h4 {
    line-height: 20%;
    text-align: center;
    //font-size: 20px;
}
.enrollText {
 font-size: 20px;
}
.text {
 font-size: 17px;
}
@media screen and (max-width: 850px) {
    .enrollText {
 font-size: 10px;
}
.text {
 font-size: 8px;
}
}


`