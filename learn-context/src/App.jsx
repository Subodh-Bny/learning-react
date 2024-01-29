import { useState } from "react";
import Login from "./components/Login";

import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
