import { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate() // To redirect after successful registration

  const handleSubmit = async (e) => {
    e.preventDefault() 

    try {
      const {data} = await axios.post(
        '/api/v3/user/register',
        { username, email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      )

      console.log(data)
      navigate('/login')
    } catch (error) {
      console.error('Registration error:', error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?
          <NavLink to="/login" className="text-blue-500 hover:underline">
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Register
