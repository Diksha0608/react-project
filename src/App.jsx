import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const userData = useContext(AuthContext);

  // Load user from localStorage on first render
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      try {
        const parsed = JSON.parse(loggedInUser);
        setUser(parsed.role);
        setLoggedInUserData(parsed.data);
      } catch (err) {
        console.error('Failed to parse user from localStorage:', err);
        localStorage.removeItem('loggedInUser'); // Clean up bad data
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!userData) {
      alert('User data not loaded yet');
      return;
    }

    // Admin login
    const admin = userData.admin?.find(
      (e) => e.Email === email && e.Password === password
    );
    if (admin) {
      setUser('admin');
      setLoggedInUserData(admin);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
      return;
    }

    // Employee login
    const employee = userData.employees?.find(
      (e) => e.Email === email && e.Password === password
    );
    if (employee) {
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} data={loggedInUserData} />}
{user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  );
};

export default App;
