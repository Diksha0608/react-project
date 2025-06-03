import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import NumberOfTask from './components/others/NumberOfTask'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

const [user,setUser] = useState(null)

const handleLogin = (email,password) =>{
 
  if(email == 'admin@me.com' && password == '123'){
    console.log("This is admin")
  }else if(email == 'user@me.com' && password == '123'){
console.log("user")
  }
  
  else{
    alert("invalid Credentials")
  }
}
handleLogin('admin@me.com', 123)

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""} 
      {/* <EmployeeDashboard/> */}

      {/* <AdminDashboard /> */}
    </div>
  )
}

export default App
