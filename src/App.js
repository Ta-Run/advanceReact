import React, { Suspense, lazy } from "react";
import SignUp from "./components/Authontic/SignUp";
import Footer from "./components/Landing/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/Landing/Header";
 function App() {

  return (
    <div>
      {/* <Suspense fallback={<h1>Please Wait</h1>}>

          <SignUp/>

      </Suspense> */}

      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
