import React from 'react'
import img from "../img1.jpeg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Password Security Matters
            <br className='hidden lg:inline-block' />
            Protect Your Data
          </h1>
          <p className='mb-8 leading-relaxed'>
            Strong passwords are essential for protecting your personal and
            sensitive information. Don't compromise your security. Choose
            passwords that are unique, complex, and difficult to guess.
          </p>
          <div className='flex justify-center'>
            <Link to={"custom-password"}>
              <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                Custom Password
              </button>
            </Link>
            <Link to={"system-generated"}>
              <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                System Generated Password
              </button>
            </Link>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded-lg'
            alt='Hero'
            src={img}
          />
        </div>
      </div>
    </section>
  );
}

export default Home