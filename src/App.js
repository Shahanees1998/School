import logo from './logo.svg';
import './App.css';
import SplashScreen from './SplashScreen';
import HomePage from './homePage/Home';
import {Routes,Route} from 'react-router-dom';
//import Header from './Components/Header';
import RegisterLine from './EnrollSchool/RegisterLine';
//import Register from './EnrollSchool/Register';
import Table from './schoolLoggedIn/Table';
import AddInfo from './schoolLoggedIn/AddInfo';
import Header from './Components/Header';
import RegisterLine2 from './JoinSchool/RegisterLine2';
import LoginLine2 from './Login/LoginLine2';
import AlumniTable from './alumniLogedin/AlumniPageTable';
function App() {
  return (

    <Routes>
      <Route path='/' element={<SplashScreen/>}/>
      <Route path='home' element={<HomePage/>}/>
      <Route path='login' element={<LoginLine2/>}/>
      <Route path='/registerLine' element={<RegisterLine/>}/>
      <Route path='/loggedin' element={<Table/>}/>
      <Route path='/alumnilogin' element={<AlumniTable/>}/>

      <Route path='/addInfo' element={<AddInfo/>}/>
      <Route path='/toAlumniRegisterPage' element={<RegisterLine2/>}/>
    </Routes>
    

  );
}

export default App;

{/**
**/}