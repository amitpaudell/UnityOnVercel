import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login, logout } from '../../features/login/authSlice';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (username == 'admin' && password == 'pass') {
      dispatch(login());
      setError('');
      navigate('/admin');
    } else {
      dispatch(logout());
      setError('Invalid username or password');
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center">
      <div className="w-full max-w-sm bg-[#f2f4f7] p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Admin Login</h2>
        {error && <div className="text-red-600 mb-3 text-sm">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md w-full px-3 py-2 mb-3"
            placeholder="Enter username"
            autoComplete="username"
          />
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md w-full px-3 py-2 mb-4"
            placeholder="Enter password"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="w-full bg-[#155dfc] text-white px-4 py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
