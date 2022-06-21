import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';


function TableRows(props) {
    let navigate = useNavigate();

    return (
    <Container>
        <div className="btnMainDiv">
            <div className="btnDiv">
                <button onClick={() => navigate('/payment')}>Pay</button>
            </div>
        </div>        <h4>{props.item.itemName}</h4>
        <h4>{props.item.itemCost}</h4>
        <h4>{props.item.stdName}</h4>
        <h4>update</h4>
        <h4>{props.item.itemDescription}</h4>

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
  .btnMainDiv {
    //background-color: red;
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .btnDiv {
    //background-color: aliceblue;
    height: 90%;
    width: 17%;
  }

`