/* eslint-disable no-unused-vars */

import Left from "./components/leftSide/Left"
import Right from "./components/RightSide/Right"
import Logout from "./components/utlis/Logout"
import Signup from "./components/forms/Signup.jsx"
import Login from "./components/forms/Login.jsx"
import { useAuth } from "./context/AuthProvider.jsx"
import { Routes,Route, Navigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [authUser, setAuthUser]=useAuth()
  console.log(authUser)

  return (
    <>
      <Routes>
        <Route path="/"
          element={authUser ? ( 
            <div className="flex bg-black h-screen">
            <Logout/>
            <Left/>
            <Right/>
          </div> ) :<Navigate to="/login"/>
          }
        />
        <Route path="/signup" element={authUser?<Navigate to="/"/>:<Signup/>} />
        <Route path="/login" element={authUser?<Navigate to="/"/>:<Login/>} />
      </Routes>
      <Toaster />

      {/* <Signup/> */}
      {/* <div className="flex bg-black h-screen">
        <Logout/>
        <Left/>
        <Right/>
      </div> */}
      {/* <Login/> */}
    </>
  )
}

export default App
