import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Transport from './Components/Transport';
import OurProducts from './Components/OurProducts';

import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>This is React In NetBeans</h1>
        <Navbar2 />
        <Navbar />
        <Routes>
          <Route exact path="/Home" Component={Home} />
          <Route exact path="/AboutUs" Component={AboutUs} />
          {/* <Route exact path="/Services" Component={Services} /> */}
          {/* <Route exact path="/ContactUs" Component={ContactUs} /> */}
          {/* <Route exact path="/Chairman" Component={Chairman} /> */}
          {/* <Route exact path="/Awards" Component={Awards} /> */}
          {/* <Route exact path="/Directors" Component={Directors} /> */}
          {/* <Route exact path="/EnergySector" Component={EnergySector} /> */}
          {/* <Route exact path="/Hotel" Component={Hotel} /> */}
          {/* <Route exact path="/IndustrialFat" Component={IndustrialFat} /> */}
          {/* <Route exact path="/OilandGhee" Component={OilandGhee} /> */}
          {/* <Route exact path="/SignUp" Component={SignUp} /> */}
          <Route exact path="/Transport" Component={Transport} />
          {/* <Route exact path="/WGCInterprisesLtd" Component={WGCInterprisesLtd} /> */}
          {/* <Route exact path="/NotFound" Component={NotFound} /> */}
          {/* <Route exact path="/Topbar" Component={Topbar} /> */}
          {/* <Route exact path="/LatestNews" Component={LatestNews} /> */}
          <Route exact path="/OurProducts" Component={OurProducts} />
          {/* <Route exact path="/MediaGallery" Component={MediaGallery} /> */}

        </Routes>







      </Router>
    </div >
  );
}

export default App;
