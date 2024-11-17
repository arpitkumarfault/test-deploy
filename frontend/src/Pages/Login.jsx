import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        '/api/v3/user/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true, 
        }
      );
      console.log('Login successful:', data);
      setTimeout(() => {
        navigate('/home')
      }, 2000);
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Login to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Don’t have an account?{' '}
          <NavLink to="/" className="text-blue-500 hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
