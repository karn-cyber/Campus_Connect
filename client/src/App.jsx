import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PreLoader from './component/PreLoader';
import Card from './component/Card';
import Profile from './Profile';
import { Navigate } from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          </Routes>
          </BrowserRouter>
          
          
        </>
      )}
    </>
  );
}

export default App;
