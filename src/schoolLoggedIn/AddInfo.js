import React, {useState} from 'react';
import styled from 'styled-components';
import Header2 from '../Components/Header2';
import { FaAngleRight } from 'react-icons/fa';
import { getDatabase, ref, set, onValue,push } from "firebase/database";
import app from '../firebase'
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';
import {useSelector} from "react-redux";

const db = getDatabase(app);

function AddInfo() {
    let navigate = useNavigate();

    const[itemInfo,setItemInfo] = useState({itemName:'',itemCost:'',stdName:'',itemDescription:''})

    const { key } = useSelector(state => state.persistedReducer)

    const onChangeHandler = (event) => {
        const{name, value} = event.target;
        setItemInfo({...itemInfo,[name]:value});

    }
console.log('hello')
    const onSubmitHandler = ()=>{
        if(itemInfo.itemName == '' || itemInfo.itemCost == '' || itemInfo.stdName =='' || itemInfo.itemDescription == '' )
        {
            toast.custom(
                <div style={{ marginTop: '5%',width: '100%', height: '6vh',  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
    
                    <div style={{ alignSelf: 'flex-start', width: '30%', height: '100%', borderLeftWidth: '8px', borderColor: 'red', borderStyle: 'solid', borderBottomWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderRadius: 5, backgroundColor: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h3 style={{ color: '#515C6F', fontFamily: 'GraphikMedium', fontWeight: '100', fontSize: '12px' }}>Kindly fill all the fields</h3>
                    </div>
                </div>, { duration: 1000 })
        }
        else{
            set(ref(db, 'School/'+key+'/items/'+ new Date().toLocaleTimeString() ), itemInfo).then(()=>{
                console.log('data saved successfully')
                toast.custom(
                    <div style={{ marginTop: '5%',width: '100%', height: '6vh',  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        
                        <div style={{ alignSelf: 'flex-start', width: '30%', height: '100%', borderLeftWidth: '8px', borderColor: 'green', borderStyle: 'solid', borderBottomWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderRadius: 5, backgroundColor: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <h3 style={{ color: '#515C6F', fontFamily: 'GraphikMedium', fontWeight: '100', fontSize: '12px' }}>data saved successfully</h3>
                        </div>
                    </div>, { duration: 1000 })
                navigate('/loggedin')
            }).catch(err=>{
                console.log(err)
            });
        }
      
    }

  return (
      <>
      <Header2/>
    <Container>
        
        <div className='needAddDiv'>
            <h3>Need</h3>
            <FaAngleRight size={20}/>
            <h3>Add</h3>
        </div>

        <div className='itemDiv'>
            <div className='h5Div'>
            <h5>Item</h5>
            </div>
            <div className='inputDiv'>
                <input style={{outline: 'none'}} placeholder='enter item' name='itemName' value={itemInfo.itemName} onChange={onChangeHandler}/>
            </div>
        </div>

        <div className='itemDiv'>
            <div className='h5Div'>
            <h5>Cost</h5>
            </div>
            <div className='inputDiv'>
                <input style={{outline: 'none'}} placeholder='enter cost' name='itemCost' value={itemInfo.itemCost} onChange={onChangeHandler}/>
            </div>
        </div>

        <div className='itemDiv'>
            <div className='h5Div'>
            <h5>Student Name</h5>
            </div>
            <div className='inputDiv'>
                <input style={{outline: 'none'}} placeholder='enter name' name='stdName' value={itemInfo.stdName} onChange={onChangeHandler}/>
            </div>
        </div>

        <div className='itemDiv'>
            <div className='h5Div'>
            <h5>Student Photo</h5>
            </div>
            <div className='inputDiv'>
                <input style={{outline: 'none'}} placeholder='enter name' type='file'/>
            </div>
        </div>
        

        <div className='descriptionDiv'>
            <div className='h5DescriptionDiv'>
            <h5>Description</h5>
            </div>
            <div className='inputDescriptionDiv'>
                <input style={{outline: 'none'}} placeholder='enter description' type='text' name='itemDescription' value={itemInfo.itemDescription} onChange={onChangeHandler}/>
            </div>
        </div>


        <div className='btnMainDiv'>
            <div className='btnDiv'>
                <button onClick={onSubmitHandler}>Submit</button>
            </div>
        </div>
        <Toaster />

    </Container>
    </>
  )
}

export default AddInfo;

const Container = styled.div`

//background-color: burlywood;
height: 90vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
.needAddDiv {
    //background-color: azure;
    height: 8%;
    width: 95%;
    display: flex;
    align-items: center;
}
.itemDiv {
    //background-color: aqua;
    height: 13.5%;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;


}
.h5Div {
    //background-color: yellow;
    height: 45%;
    width: 20%;
    display: flex;
    align-items: center;
}
.inputDiv {
    //background-color: bisque;
    height: 55%;
    width: 16%;
    border: 1px solid black;
    border-radius: 7px;
    display: flex;
    align-items: center;
}
input {
    width: 100%;
    border: 0px;
}
.descriptionDiv {
    //background-color: aqua;
    height: 17%;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

}
.h5DescriptionDiv {
    //background-color: yellow;
    height: 40%;
    width: 20%;
    display: flex;
    align-items: center;

}
.inputDescriptionDiv {
    //background-color: bisque;
    height: 60%;
    width: 40%;
    border: 1px solid black;
    border-radius: 7px;
    display: flex;
    align-items: center;
}
.btnMainDiv {
    //background-color: green;
    height: 11%;
    width: 95%;
    display: flex;
    align-items: center;
}
.btnDiv {
   // background-color: yellow;
    height: 70%;
    width: 16%;

}
button {
    background-color: gray;
    height: 100%;
    width: 100%;
    border: 0px;
    border-radius: 7px;
    font-size: 20px;
    color: white;
}



`