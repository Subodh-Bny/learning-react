import { useState } from "react";

import "./App.css";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div>
        <h1>React Context API</h1>
      </div>
    </UserContextProvider>
  );
}

export default App;
