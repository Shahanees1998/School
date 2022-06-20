import React,{useEffect} from 'react';
import styled from 'styled-components';
import { FaSearch, FaUserCircle } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import setLogedinEmail from '../Redux/actions';
import { useLocation } from 'react-router-dom';


function Header() {
    const dispatch = useDispatch()

    const location = useLocation();
    let navigate = useNavigate();

    const { data, key } = useSelector(state => state.persistedReducer)

    useEffect(() => {
        console.log((location))

        if(data == '' && location.pathname != '/home')
{
//navigate('/login')
}
    }, [location,data]);

    function loginHandler() {
        navigate('/home');
        
    }
  return (
    <Container>
        <div className='innerDiv'>
            <div className='leftDiv'>
                <div className='imgDiv' onClick={() => navigate('/home')}>
                    <img src={require('../imgs/userImg.png')} className='userImg'/>
                </div>
                <h3>StudenBook</h3>
            </div>
            <div className='rightDiv'>
                <div className='searchDiv'>
                <FaSearch size={20} className='searchIcon'/>
                <input style={{outline: 'none', backgroundColor: 'white', width: '100%'}} placeholder='Search' className='searchInput'/>
                </div>
                <div className='aboutDiv'>
                {
                        data =='' ? 
                        <div className='loginDiv'>
                        <button className='loginBtn'>About</button>
                    </div>
                    :
                    <div className='loginDiv' onClick={() => dispatch(setLogedinEmail(''))}>
                        <h3 style={{fontSize: '12px'}}>Logout</h3>                </div>
                    }
                </div>
                <div className='loginAndIconDiv'>
                    <FaUserCircle size={40}/>
                    {
                        data =='' ? 
                        <div className='loginDiv'>
                        <button className='loginBtn' onClick={()=>loginHandler()}>Register</button>
                    </div>
                    :
                    <div className='loginDiv'>
                        <h3 style={{fontSize: '12px'}}>{data}</h3>                </div>
                    }
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  background-color: gray;
  height: 10vh;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  .innerDiv {
      //background-color: brown;
      height: 100%;
      width: 95%;
      display: flex;
  }
  .leftDiv {
      //background-color: green;
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;
  }
  .imgDiv {
      //background-color: yellow;
      height: 70%;
      width: 10%;
      border-radius: 70%;
      overflow: hidden;
  }
  .userImg {
      width: 100%;
      height: 100%;
  }
  h3 {
      font-size: 25px;
      font-weight: bold;
      color: white;
      margin-left: 2%;
  }
  .rightDiv {
      //background-color: blueviolet;
      height: 100%;
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .searchDiv {
      //background-color: #EEEEEE;
      width: 45%;
      height: 60%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 10px;
      background-color: white;
  }
  .searchIcon {
      color: #C4C4C4;
      margin-left: 3%;
      margin-right: 2%;
  }
  .searchInput {
      //font-family: GraphikBlackItalic;
      font-weight: 400;
      font-size: 20px;
      color: white;
      background-color: gray;
      border-width: 0px;
  }
  .aboutDiv {
      //background-color: red;
      height: 80%;
      width: 20%;
      
  }
  .aboutBtn {
      background-color: gray;
      height: 100%;
      width: 100%;
      font-size: 20px;
      color: white;
      border: 0px;
  }
  .loginAndIconDiv {
      //background-color: yellowgreen;
      width: 30%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: space-around;
  }
  .loginDiv {
      //background-color: red;
      display: flex;
      align-items: center;
      height: 100%;
      width: 60%;
  }
  .loginBtn {
      background-color: gray;
      height: 100%;
      width: 100%;
      font-size: 20px;
      color: white;
      border: 0px;

  }

   `