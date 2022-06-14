import React,{useState} from 'react';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';
import Header from '../Components/Header';
import RegisterAlumni from './RegisterAlumni';
import SchoolInformationAlumni from './SchoolInformationAlumni';
import CompleteAlumni from './CompleteAlumni';

function RegisterLine2() {

  const [component, setcomponent] = useState('register');

  function componentHandler(item1) {
    setcomponent(item1);
  }


  return (
      <>
      <Header/>
    <Container>
        <div className='innerDiv'>
        <h3>Register</h3>
        <FaAngleRight size={20} />
        <h3>School Information</h3>
        <FaAngleRight size={20} />
        <h3>Complete</h3>
        </div>
      </Container>
      
      {
        component==='register'?<RegisterAlumni onClick={componentHandler}/>:
        component==='schoolInformation'?<SchoolInformationAlumni onClick={componentHandler}/>
        :component==='complete'?
        <CompleteAlumni />:null
      }
      </>
  )
}

export default RegisterLine2;

const Container = styled.div`

background-color: white;
height: 12vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
.innerDiv {
    //background-color: yellow;
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;

}

`