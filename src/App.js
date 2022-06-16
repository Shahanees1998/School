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
import Store from './Redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from '../src/Redux/store'
import AccountReq from '../src/accountsreq/AccountReq'
function App() {
  return (
    <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>

    <Routes>
      <Route path='/' element={<SplashScreen/>}/>
      <Route path='home' element={<HomePage/>}/>
      <Route path='login' element={<LoginLine2/>}/>
      <Route path='/registerLine' element={<RegisterLine/>}/>
      <Route path='/loggedin' element={<Table/>}/>
      <Route path='/accounts' element={<AccountReq/>}/>

        {/* when admin will logedin*/}
        <Route path='/alumnilogin' element={<AlumniTable/>}/>
        {/* when alumni will logedin*/}

      <Route path='/addInfo' element={<AddInfo/>}/>
      <Route path='/toAlumniRegisterPage' element={<RegisterLine2/>}/>
    </Routes>
    </PersistGate>
    </Provider>

  );
}

export default App;

{/**
**/}