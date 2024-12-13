import  { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { NavLink } from 'react-router-dom';
function Login(){
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('login.svg')" }}>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <h1 className="text-3xl font-bold mb-4">WELCOME TO TRABAHUSTLE!</h1>
        <p className="text-gray-600 mb-6">Connecting you with skilled freelancers and valuable projects.</p>

        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          className="border border-gray-300 rounded-md p-2 mb-4 w-5/6"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <div className="relative mb-4 w-5/6">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Enter Password"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-2 cursor-pointer"
          >
            {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">Remember Me</label>
        </div>

        <button className="bg-blue-500 text-white rounded-md px-4 py-2 mb-4">
          Login
        </button>

        <p className="text-sm text-gray-600">
          Dont have an account?  <NavLink to="/signup" className="text-blue-500">Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;