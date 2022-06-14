import logo from './logo.svg';
import './App.css';
import SplashScreen from './SplashScreen';
import Footer from './homePage/Footer';
import {Routes,Route} from 'react-router-dom';
//import Header from './Components/Header';
import RegisterLine from './EnrollSchool/RegisterLine';
//import Register from './EnrollSchool/Register';
import Table from './schoolLoggedIn/Table';
import AddInfo from './schoolLoggedIn/AddInfo';
import Header from './Components/Header';
import RegisterLine2 from './JoinSchool/RegisterLine2';
import RegisterAlumni from './JoinSchool/RegisterAlumni';


function App() {
  return (

    <Routes>
      <Route path='/' element={<SplashScreen/>}/>
      <Route path='home' element={<Footer/>}/>
      <Route path='/registerLine' element={<RegisterLine/>}/>
      <Route path='/loggedin' element={<Table/>}/>
      <Route path='/addInfo' element={<AddInfo/>}/>
      <Route path='/toAlumniRegisterPage' element={<RegisterLine2/>}/>
    </Routes>
    

  );
}

export default App;

{/**
**/}