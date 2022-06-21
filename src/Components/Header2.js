import React,{useEffect} from 'react';
import styled from 'styled-components';
import { FaSearch, FaUserCircle } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import setLogedinEmail from '../Redux/actions';


function Header2() {
    const dispatch = useDispatch()
    const { userType } = useSelector(state => state.persistedReducer)

    let navigate = useNavigate();

    const { data, key } = useSelector(state => state.persistedReducer)

    const location = useLocation();
    useEffect(() => {
        console.log((location))
        if(location.pathname == '/loggedin' || location.pathname == '/alumnilogin')
        {
            console.log(`data is ${data}`)

            if(data == '')
            {
                navigate('/login')

            }
        }

    }, [location,data]);

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
                <div className='needsMainDiv'>
                <div  className='needsDiv'>
                <button className='loginBtn'>Needs</button>
                </div>
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
                  
                    <div className='loginDiv' onClick={() => {userType == 'Alumni' ? navigate('/alumnilogin'): navigate('/loggedin')}}>
                        <h3 style={{fontSize: '12px'}}>{data}</h3>                </div>
                    
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Header2;

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
  .needsMainDiv {
      //background-color: #EEEEEE;
      width: 45%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-radius: 5px;
  }
  .needsDiv {
    background-Color: green;
    width: 35%;
    height: 100%;
  }
  
  
  .aboutDiv {
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