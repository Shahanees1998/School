import React,{useState} from 'react';
import styled from 'styled-components';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
import Header from '../Components/Header';
import Register from './Register';
import SchoolInformation from './SchoolInformation';
import Payment from './Payment';
import Complete from './Complete';
import ContactUs from './ContactUs';

function RegisterLine() {

  const [component, setcomponent] = useState('register');
  //const [colorChangeOfSchoolInfo, setcolorChangeOfSchoolInfo] = useState();

  function componentHandler(item1) {
    setcomponent(item1);
    
    
  }

  return (
    <>
      <Header />
      <Container>
        <h3 >Register</h3>
        <FaAngleRight size={20} />
        <h3>School Information</h3>
        <FaAngleRight size={20} />
        <h3>Payment Information</h3>
        <FaArrowRight size={20} />
        <h3>Complete</h3>
      </Container>
      {
        component==='register'?<Register onClick={componentHandler}/>:
        component==='schoolInformation'?<SchoolInformation onClick={componentHandler}/>
        :component==='payment'?<Payment onClick={componentHandler}/>:component==='complete'?
        <Complete onClick={componentHandler}/>:component==='contactus'?<ContactUs onClick={componentHandler}/>:null
      }
      
    </>
  )
}

export default RegisterLine;

const Container = styled.div`

background-color: white;
height: 12vh;
width: 100%;
display: flex;
align-items: center;

`