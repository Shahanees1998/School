import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TableRows from './TableRows';
import Header from '../Components/Header';
import AllPending from './AllPending';
import {useNavigate} from 'react-router-dom';
import app from '../firebase'
import { getDatabase, ref, set, onValue,push,update } from "firebase/database";

const db = getDatabase(app);


// const data = [
//     { id: 1, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
//     { id: 2, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
//     { id: 3, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
//     { id: 4, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
//     { id: 5, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
//     { id: 6, inputType: 'checkbox', item: 'study table', cost: 1300, student: 'Atif', photo: 'update', description: 'update' },
// ]



function Table() {
    const [check,setCheck] =  useState(false);
    const[data,setData] = useState([]);

    const starCountRef = ref(db, 'School/-N4WLz1ejar-mNf4xdcT/items');


    let navigate = useNavigate();

    useEffect(()=>{
        onValue(starCountRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                console.log('child data',childData);
                setData((prev)=>[...prev,childData])
                console.log('child data array', data, 'length',data.length)
                // ...
            });
            setCheck(true)
        }, {
            onlyOnce: false
        });

    },[check])


    function addHandler() {
        navigate('/addInfo')
    }

    if(!check)
        return <div>Loading...</div>
    else
    return (
        <>
        <Header/>
        <AllPending/>
        <Container>
            <div className='innerDiv'>
                <div className='tableHeaderDiv'>
                    <h5>Check All</h5>
                    <h5>Item</h5>
                    <h5>Cost</h5>
                    <h5>Student</h5>
                    <h5>Photo</h5>
                    <h5>Description</h5>
                </div>
                {
                    data.map((item,index) => <TableRows key={index} item={item}/>)
                }
                <div className='btnMainDiv'>
                    <div className='btnDiv'>
                        <button onClick={()=>addHandler()}>Add</button>
                    </div>
                </div>

                <div className='paragraphDiv'>
                    
                        <p>StudentBook does not sell your information to anyone</p>
                    
                </div>
                
            </div>
        </Container>
        </>
    )
}

export default Table;

const Container = styled.div`

//background-color: gray;
height: 79.7vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
.innerDiv {
    //background-color: aqua;
    height: 100%;
    width: 95%;
    overflow: auto;
}
.tableHeaderDiv {
    height: 10%;
    //background-color: brown;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    width: 15%;
}
button {
    background-color: gray;
    width: 100%;
    height: 100%;
    border: 0px;
    color: white;
    border-radius: 5px;
}
.paragraphDiv {
    //background-color: red;
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}


`