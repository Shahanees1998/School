import React from 'react';
import styled from 'styled-components';
import deleteItem from '../imgs/delete.png'

function TableRows(props) {


 const DeleteItem = (id) => {
   console.log(id)
 }

  return (
    <Container>
        <input style={{outline: 'none'}} type='checkbox'/>
        <div style={{width: '15%',display: ' flex',alignItems: 'center', justifyContent: 'center'}}><h4>{props.item.itemName}</h4></div>
        
        <div style={{width: '15%',display: ' flex',alignItems: 'center', justifyContent: 'center'}}><h4>{props.item.itemCost}</h4></div>

        
        <div style={{width: '15%',display: ' flex',alignItems: 'center', justifyContent: 'center'}}> <h4>{props.item.stdName}</h4></div>

        
        <div style={{width: '15%',display: ' flex',alignItems: 'center', justifyContent: 'center'}}><h4>{props.item.itemDescription}</h4></div>

        <div style={{width: '15%',display: ' flex',alignItems: 'center', justifyContent: 'center'}} onClick={() => DeleteItem(props.item.id) } ><img src={deleteItem} /></div>


    </Container>
  )
}

export default React.memo(TableRows);

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