import React, {useState} from 'react';
import styled from 'styled-components';
import { getDatabase, ref, set, onValue,push } from "firebase/database";
import app from '../firebase'
import toast, { Toaster } from 'react-hot-toast';

const db = getDatabase(app);

function SchoolInformationAlumni(props) {
    const key = props.getKey;

    const[alumniSchoolInfo,setAlumniSchoolInfo] =useState({schoolName:'',graduationyear:'',alumniNumber:''})
    function backHandler() {
        var val = "register"
        props.onClick(val);
    }

    function nextHandler() {
        if(alumniSchoolInfo.schoolName == '' || alumniSchoolInfo.graduationyear == '' || alumniSchoolInfo.alumniNumber =='')
        {
            toast.custom(
                <div style={{ marginTop: '5%',width: '100%', height: '6vh',  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
    
                    <div style={{ alignSelf: 'flex-start', width: '30%', height: '100%', borderLeftWidth: '8px', borderColor: 'red', borderStyle: 'solid', borderBottomWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderRadius: 5, backgroundColor: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h3 style={{ color: '#515C6F', fontFamily: 'GraphikMedium', fontWeight: '100', fontSize: '12px' }}>Kindly fill all the fields</h3>
                    </div>
                </div>, { duration: 1000 })
        }
        else {
            var val = "complete"
            set(ref(db, 'users/alumni/'+key+'/schoolInfo' ), alumniSchoolInfo).then(()=>{
                console.log('data saved successfully')
            }).catch(err=>{
                console.log(err)
            });
            props.onClick(val);
        }
      
    }

    const onChangeHandler = (event)=>{
        const{name,value} = event.target;
        setAlumniSchoolInfo({...alumniSchoolInfo,[name]:value});
    }


  return (
    <Container>
        <div className='schoolNameGraduationYear'>
            <div className='schoolNameGraduationYearInnerDiv'>
                <div className='schoolGradutionDiv'>
                    <div className='h3Div2'>
                        <h3>School Name</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter schoolName' name="schoolName" value={alumniSchoolInfo.schoolName}
                        onChange={onChangeHandler}/>
                    </div>
                </div>
            </div>

            <div className='schoolNameGraduationYearInnerDiv'>
                <div className='schoolGradutionDiv'>
                    <div className='h3Div2'>
                        <h3>Graduation Year</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter relationShip' name="graduationyear" value={alumniSchoolInfo.graduationyear}
                               onChange={onChangeHandler} />
                    </div>
                </div>
            </div>
            </div>

            <div className='emailMainDiv' style={{marginTop:'3%'}}>
                <div className='emailDiv'>
                    <div className='h3Div2'>
                        <h3>Phone Number</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input style={{outline: 'none'}} placeholder='enter phone number' name="alumniNumber" value={alumniSchoolInfo.alumniNumber}
                               onChange={onChangeHandler} />
                    </div>
                </div>
            </div>

            <div className='btnMainDiv'>
                <div className='btnInnerDiv'>
                    <div className='twoBtnsDiv'>
                    <div className='btnDiv'>
                        <button onClick={()=>backHandler()}>Back</button>
                    </div>
                    <div className='btnDiv'>
                        <button onClick={()=>nextHandler()}>Next</button>
                    </div>
                    </div>
                    <p>StudentBook does not sell your information to anyone</p>

                </div>

            </div>
            <Toaster />

        </Container >
  )
}

export default SchoolInformationAlumni;


const Container = styled.div`

//background-color: green;
height: 75vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;

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
.schoolNameGraduationYear {
   // background-color: brown;
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.schoolNameGraduationYearInnerDiv {
    //background-color: blue;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

}
.schoolGradutionDiv {
   // background-color: aqua;
    height: 80%;
    width: 20%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;

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
.twoBtnsDiv {
    //background-color: brown;
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btnDiv {
    //background-color: gray;
    height: 50%;
    width: 45%;
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