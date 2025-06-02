import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import NumberOfTask from './components/others/NumberOfTask'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <div>
      {/* <Login/>   */}
      {/* <EmployeeDashboard/> */}

      <AdminDashboard />
    </div>
  )
}

export default App
