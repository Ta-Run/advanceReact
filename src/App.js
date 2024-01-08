import React, { Suspense, lazy } from "react";

import SignUp from "./components/Authontic/SignUp";

function App() {

  return (
    <div>
      <Suspense fallback={<h1>Please Wait</h1>}>

          <SignUp/>

      </Suspense>
    </div>
  );
}

export default App;
