import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./Screens/Home";
import StripeContainer from "./Screens/Payement";
import EnrollSchool from "./Screens/EnrollSchool";
import SchoolPanel from "./Screens/SchoolPanel";
import EnrollAlumni from "./Screens/EnrollAlumni";
import AddItem from "../src/Screens/AddItem";
import UpdateItem from "./Screens/UpdateItem";
import Login from "./Screens/Login";
import AlumniPanel from "./Screens/AlumniPanel";
import Store from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../src/Redux/store";
import AccountReq from "./Screens/AccountReq";
import Settings from "./Screens/Settings";
import "./App.css";

function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="/EnrollSchool" element={<EnrollSchool />} />
          <Route path="/EnrollAlumni" element={<EnrollAlumni />} />
          <Route path="/login" element={<Login />} />
          <Route path="/UpdateItem" element={<UpdateItem />} />
          <Route path="/SchoolLogin" element={<SchoolPanel />} />
          <Route path="/accounts" element={<AccountReq />} />
          <Route path="/payment" element={<StripeContainer />} />
          <Route path="/AlumniLogin" element={<AlumniPanel />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
