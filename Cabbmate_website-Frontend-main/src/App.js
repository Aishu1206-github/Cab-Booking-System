import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/login";

import DriverLogin from "./components/DriverLogin/DriverLogin";
import Homepage from "./components/homepage/homepage";
import Page2 from "./components/Page2/Page2";
import SignupDriver from "./components/SignupDriver/SignupDriver";
import Journey from "./components/Journey/Journey";
import Location from "./components/Location/Location";

import Drawer from "./components/Drawer/Drawer";
import PublishRide from "./components/PublishRide/PublishRide";
import Step4 from "./components/PublishRide/Step4/Step4";
import Loader from "./components/Loader/Loader";
import DriverDetails from "./components/DriverDetaiils/DriverDetails";
import { useState, useEffect } from "react";
import Help from "./components/Help/Help";
import MyRides from "./components/MyRides/MyRides";
import PendingRides from "./components/PendingRides/PendingRides";
import BookYourRide from "./components/BookYourRide/BookYourRide";
import BookRide from "./components/BookRide/BookRide";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          {/* <Route exact path="/" element={<Homepage />} /> */}
          <Route exact path="/Login" element={<Login />} />
         
          <Route exact path="/journey" element={<Journey />} />
          <Route exact path="/" element={<Homepage />} />

          
          <Route exact path="/driverlogin" element={<DriverLogin/>}/>
         
          <Route exact path="/myrides" element={<MyRides />} />
       
          <Route exact path="/pendingrides" element={<PendingRides />} />
          <Route exact path="/help" element={<Help />} />
          <Route path="*" element={<Navigate to="/" replace />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;