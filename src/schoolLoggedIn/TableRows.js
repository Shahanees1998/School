import React from 'react';
import styled from 'styled-components';


function TableRows() {
  return (
    <Container>
        <input type='checkbox'/>
        <h4>Study table</h4>
        <h4>1300</h4>
        <h4>Atif khan</h4>
        <h4>update</h4>
        <h4>update</h4>

    </Container>
  )
}

export default TableRows;

const Container = styled.div`

//background-color: green;
width: 100%;
height: 8%;
display: flex;
align-items: center;
justify-content: space-between;
input {
    width: 30px;
    height: 30px;
}

`