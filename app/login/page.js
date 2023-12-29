'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users/login', {
        email,
        password,
      });
      const { data } = await response;

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="flex flex-col p-6 w-[280px] md:w-auto text-black bg-white shadow-2xl rounded-2xl md:flex-col md:m-0"
        onSubmit={handleSubmit}
      >
        <h2 className="font-mono font-bold mb-5 text-center text-4xl text-gray-600">
          Log In
        </h2>
        <label htmlFor="email" className="my-2">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email address"
            className="w-full mt-1 p-4 border text-center border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
          />
        </label>
        <label htmlFor="password" className="my-2">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
            className="w-full mt-1 p-4 border text-center border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
          />
        </label>
        <div className="flex flex-col items-center justify-between mt-4 md:flex-row md:space-x-4">
          <div className="font-thin text-cyan-700 mb-5 md:mb-0">
            Forgot password
          </div>
          <button
            type="submit"
            className="w-full md:w-auto flex justify-center items-center p-3 px-9 space-x-4 font-sans font-bold text-white rounded-md bg-cyan-700 shadow-cyan-100 hover:bg-opaciity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
          >
            <span>Next</span>
            <Image
              src="svg/right-arrow.svg"
              alt=""
              width={20}
              height={20}
              className="h-7"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
