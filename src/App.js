import "./App.css";
import HomePage from "./Screens/Home";
import { Routes, Route } from "react-router-dom";
import StripeContainer from "./Stripe/StripeContainer";
import EnrollSchool from "./Screens/EnrollSchool";
import SchoolPanel from "./Screens/SchoolPanel";
import EnrollAlumni from "./Screens/EnrollAlumni";
import AddItem from "../src/Screens/AddItem";
import Login from "./Screens/Login";
import AlumniTable from "./alumniLogedin/AlumniPageTable";
import Store from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../src/Redux/store";
import AccountReq from "../src/accountsreq/AccountReq";
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

          <Route path="/loggedin" element={<SchoolPanel />} />
          <Route path="/accounts" element={<AccountReq />} />
          <Route path="/payment" element={<StripeContainer />} />

          {/* when admin will logedin*/}
          <Route path="/alumnilogin" element={<AlumniTable />} />
          {/* when alumni will logedin*/}

          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;

{
  /**
   **/
}
