import React from 'react';
import styled from 'styled-components';

function SchoolInformationAlumni(props) {

    function backHandler() {
        var val = "register"
        props.onClick(val);
    }

    function nextHandler() {
        var val = "complete"
        props.onClick(val);
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
                        <input placeholder='enter schoolName' />
                    </div>
                </div>
            </div>

            <div className='schoolNameGraduationYearInnerDiv'>
                <div className='schoolGradutionDiv'>
                    <div className='h3Div2'>
                        <h3>Graduation Year</h3>
                    </div>
                    <div className='emailInputDiv'>
                        <input placeholder='enter relationShip' />
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
                        <input placeholder='enter phone number' />
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

        </Container >
  )
}

export default SchoolInformationAlumni;


const Container = styled.div`

//background-color: green;
height: 78vh;
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