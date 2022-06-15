import React,{useState} from 'react';
import styled from 'styled-components';
import { getDatabase, ref, set, onValue,push } from "firebase/database";
import app from '../firebase'
import {useNavigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux'

const db = getDatabase(app);
function Login(props) {
    const { data } = useSelector(state => state.userReducer)
console.log(`data ${data}`)
    let navigate = useNavigate();

    const[email, setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [check,setCheck] = useState(false);

    const handleAlumni = () => {
        setUserType('Alumni');
      };
      const handleAdmin = () => {
        setUserType('Admin');
      };
    const onChangeHandler= (event)=>{
        console.log('name',event.target.name);
        const inputName = event.target.name;
        const inputValue = event.target.value;
        switch (inputName){
            case 'email':
                setEmail(inputValue)
                break;
            case 'password':
                setPassword(inputValue)
   break;
            default:
                console.log('default')
                break;

        }
    }


    function nextHandler() {
       


      {/*  var val = "schoolInformation";

        push(ref(db, 'users/alumni' ), {
            firstName,
            lastName,
            email,
            password,
            confirmPass,approve:false
        }).then(()=>{
            console.log('data saved successfully')
        }).catch(err=>{
            console.log(err)
        });
    props.onClick(val);*/}
    if(email == '' || password == '')
    {
        toast.custom(
            <div style={{ marginTop: '5%',width: '100%', height: '6vh',  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>

                <div style={{ alignSelf: 'flex-start', width: '30%', height: '100%', borderLeftWidth: '8px', borderColor: 'red', borderStyle: 'solid', borderBottomWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderRadius: 5, backgroundColor: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h3 style={{ color: '#515C6F', fontFamily: 'GraphikMedium', fontWeight: '100', fontSize: '12px' }}>Kindly fill all the fields</h3>
                </div>
            </div>, { duration: 1000 })
    }

    else {
        let role='';

        if(userType == 'Admin')
            role = 'admin'
        else{
            role = 'alumni'
        }
        const starCountRef = ref(db, 'users/'+role);



            onValue(starCountRef, (snapshot) => {
                let alumniEmail,alumniPassword;
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();
                    console.log('child data Login',childData);
                    alumniEmail =  childData.email;
                    alumniPassword = childData.password;

                    if(childData.email == email && childData.password == password){

                        if(userType == 'Alumni')
                        {
                            navigate('/alumnilogin');
                        }
                        else {
                            navigate('/loggedin');
                        }
                    }



                   // setData((prev)=>[...prev,childData])
                    // ...
                });
                if(alumniEmail == email){
                    if(alumniPassword == password)
                    {
                        if(userType == 'Alumni')
                        {
                            navigate('/alumnilogin');
                        }
                        else {
                            navigate('/loggedin');
                        }
                    }
                   
                }
                if(alumniPassword == password){
                    if(alumniEmail == email) 
                    {
                        if(userType == 'Alumni')
                        {
                            navigate('/alumnilogin');
                        }
                        else {
                            navigate('/loggedin');
                        }
                    }
                 
                }
                if(alumniEmail != email){
                    toast.custom(
                        <div style={{ marginTop: '5%',width: '100%', height: '6vh',  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            
                            <div style={{ alignSelf: 'flex-start', width: '30%', height: '100%', borderLeftWidth: '8px', borderColor: 'red', borderStyle: 'solid', borderBottomWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderRadius: 5, backgroundColor: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <h3 style={{ color: '#515C6F', fontFamily: 'GraphikMedium', fontWeight: '100', fontSize: '12px' }}>email not found</h3>
                            </div>
                        </div>, { duration: 1000 })
                }
               else if(alumniPassword != password){
                   toast.custom(
                    <div style={{ marginTop: '5%',width: '100%', height: '6vh',  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        
                        <div style={{ alignSelf: 'flex-start', width: '30%', height: '100%', borderLeftWidth: '8px', borderColor: 'red', borderStyle: 'solid', borderBottomWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderRadius: 5, backgroundColor: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <h3 style={{ color: '#515C6F', fontFamily: 'GraphikMedium', fontWeight: '100', fontSize: '12px' }}>Invalid Password</h3>
                        </div>
                    </div>, { duration: 1000 })
                }


               // setCheck(true)
            }, {
                onlyOnce: false
            });
    }
  
    }

    return (
        <Container>
       
            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Email</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter email' name="email" value={email} onChange={onChangeHandler} />
                    </div>
                </div>
            </div>

            <div className='emailMainDiv'>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Password</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter password' name="password" value={password} onChange={onChangeHandler} />
                    </div>
                </div>
            </div>
            <div style={{flexDirection: 'row', marginLeft: '40px', marginTop: '30px'}}>
            <div style={{flexDirection: 'row'}}>
            <input style={{outline: 'none'}}
          type="checkbox"
          id="topping"
          name="topping"
          value={userType}
          checked={userType == 'Admin'}
          onChange={handleAdmin}
        />
        Admin
        </div>
        <div style={{flexDirection: 'row'}}>

            <input style={{outline: 'none'}}
          type="checkbox"
          id="topping"
          name="topping"
          value={userType}
          checked={userType == 'Alumni'}
          onChange={handleAlumni}
        />
        Alumni
      </div>
      </div>
      
      
                  <div className='btnMainDiv'>
                <div className='btnInnerDiv'>
                    <div className='btnDiv'>
                        <button onClick={()=>nextHandler()}>Login</button>
                    </div>
                    <p>StudentBook does not sell your information to anyone</p>

                </div>

            </div>
            <Toaster />
        </Container >
    )
}

export default Login;

const Container = styled.div`

//background-color: green;
height: 76vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
overflow: hidden;
.firstNameLastNameDiv {
    //background-color: yellow;
    display: flex;
    height: 18%;
}
.firstNameDiv {
    height: 100%;
    width: 20%;
    //background-color: aqua;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.lastNameDiv {
    height: 100%;
    width: 20%;
    //background-color: aliceblue;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.h3Div {
    //background-color: blueviolet;
    height: 50%;
    width: 90%;
    display: flex;
    align-items: center;
}
.inputDiv {
    height: 50%;
    width: 90%;
    //background-color: azure;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    border: 1px solid black;
    //border-color: brown;
}
input {
    border: 0px;
}
.emailMainDiv {
    //background-color: yellow;
    height: 18%;
}
.emailDiv {
    //background-color: aqua;
    height: 100%;
    width: 20%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.h3Div2 {
    //background-color: blueviolet;
    height: 50%;
    width: 90%;
    display: flex;
    align-items: center;
}
.emailInputDiv {
    //background-color: aliceblue;
    height: 50%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    border: 1px solid black;
}

.btnMainDiv {
    //background-color: aqua;
    height: 18%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.btnInnerDiv {
    //background-color: red;
    height: 100%;
    width: 94%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btnDiv {
    //background-color: gray;
    height: 50%;
    width: 16%;
    //border: 1px solid black;
    
}
button {
    background-color: gray;
    height: 100%;
    width: 100%;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    border: 0px;
}




`