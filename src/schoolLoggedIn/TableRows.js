import React from 'react';
import styled from 'styled-components';


function TableRows(props) {
  return (
    <Container>
        <input style={{outline: 'none'}} type='checkbox'/>
        <div style={{width: '15%'}}><h4>{props.item.itemName}</h4></div>
        
        <div style={{width: '15%'}}><h4>{props.item.itemCost}</h4></div>

        
        <div style={{width: '15%'}}> <h4>{props.item.stdName}</h4></div>

       
        <div style={{width: '15%'}}><h4>update</h4></div>

        
        <div style={{width: '15%'}}><h4>{props.item.itemDescription}</h4></div>

        

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