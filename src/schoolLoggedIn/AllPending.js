import React from 'react';
import styled from 'styled-components';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';

function AllPending() {
  return (
    <Container>
        <div className='leftDiv'>
            <h3>Needs</h3>
        </div>
        <div className='rightDiv'>
            <h3>Needs</h3>
            <FaArrowRight size={20}/>
            <h3>Pending</h3>
            <FaArrowRight size={20}/>
            <h3>Completed(dropDown)</h3>
        </div>
    </Container>
  )
}

export default AllPending;

const Container = styled.div`

background-color: white;
height: 10vh;
width: 100%;
display: flex;
.leftDiv {
    //background-color: yellowgreen;
    height: 100%;
    width: 40%;
}
.rightDiv {
    //background-color: yellow;
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: right;
}


`