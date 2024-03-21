import React, { useState } from 'react';
import { LuCopy } from "react-icons/lu";
import toast from 'react-hot-toast';

const SystemGenerated = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState('');

  const generatePassword = () => {
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;
    
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    
    setPassword(generatedPassword);
    evaluatePasswordStrength(generatedPassword);
  };

  const handleLengthChange = (event) => {
    setLength(parseInt(event.target.value));
  };

  const handleIncludeNumbersChange = () => {
    setIncludeNumbers(!includeNumbers);
  };

  const handleIncludeSymbolsChange = () => {
    setIncludeSymbols(!includeSymbols);
  };

  const evaluatePasswordStrength = (generatedPassword) => {
    let strength = 'Weak';
    if (generatedPassword.length >= 8 && includeNumbers && includeSymbols) {
      strength = 'Strong';
    } else if (generatedPassword.length >= 6) {
      strength = 'Medium';
    } else {
      strength = 'Weak';
    }
    setPasswordStrength(strength);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast.success('Password copied to clipboard!');
  };

  return (
    <>
      <div className='p-8 max-w-7xl mt-10 mx-auto bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
          Generate Password
        </h2>
        <div className='mb-4'>
          <label htmlFor='length' className='block text-gray-700'>
            Password Length:
          </label>
          <select
            id='length'
            className='block w-16 py-1 px-2 focus:outline-none mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            value={length}
            onChange={handleLengthChange}
          >
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='6'>6</option>
            <option value='8'>8</option>
            <option value='12'>12</option>
            <option value='14'>14</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='form-checkbox h-5 w-5 text-indigo-600'
              checked={includeNumbers}
              onChange={handleIncludeNumbersChange}
            />
            <span className='ml-2 text-gray-700'>Include Numbers</span>
          </label>
        </div>
        <div className='mb-4'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='form-checkbox h-5 w-5 text-indigo-600'
              checked={includeSymbols}
              onChange={handleIncludeSymbolsChange}
            />
            <span className='ml-2 text-gray-700'>Include Symbols</span>
          </label>
        </div>
        <button
          className='bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>
      {password && (
        <div className='p-8 max-w-7xl mt-10 mx-auto flex items-center flex-col gap-4'>
          <label className='block text-gray-700 text-center text-2xl'>
            Generated Password:
          </label>
          <div className='flex gap-2 items-center'>
            <input
              type='password'
              className={`block text-center py-1 px-3 focus:outline-none mt-1 border-gray-300 rounded-md shadow-sm ${
                passwordStrength === "Weak"
                  ? "text-red-500"
                  : passwordStrength === "Medium"
                  ? "text-orange-500"
                  : "text-green-500"
              }`}
              value={password}
            />
            <LuCopy onClick={copyToClipboard} className='cursor-pointer text-xl'/>
          </div>
          <p
            className={`text-lg ${
              passwordStrength === "Weak"
                ? "text-red-500"
                : passwordStrength === "Medium"
                ? "text-orange-500"
                : "text-green-500"
            }`}
          >
            {passwordStrength} Password
          </p>
        </div>
      )}
    </>
  );
};

export default SystemGenerated;
