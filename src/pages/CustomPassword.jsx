import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { LuCopy } from "react-icons/lu";

const CustomPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const evaluatePasswordStrength = (inputPassword) => {
    if (inputPassword.length < 5) {
      setPasswordStrength('Weak');
    } else if (inputPassword.length < 8) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Strong');
    }
  };

  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
    evaluatePasswordStrength(inputPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast.success('Password copied to clipboard!');
  };

  return (
    <div className="p-8 max-w-7xl mt-10 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Custom Password</h2>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Enter Your Password:</label>
        <div className="flex items-center">
          <input
            type="password"
            id="password"
            className="block w-full py-1 mr-3 px-3 focus:outline-none mt-1 border-gray-300 rounded-md shadow-sm"
            value={password}
            onChange={handlePasswordChange}
          />
          <LuCopy onClick={copyToClipboard} className='cursor-pointer text-xl'/>
        </div>
      </div>
      {passwordStrength && (
        <div className="mt-4">
          <p className={`text-lg ${passwordStrength === 'Weak' ? 'text-red-500' : passwordStrength === 'Medium' ? 'text-orange-500' : 'text-green-500'}`}>
            Your Password Strength: {passwordStrength}
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomPassword;
