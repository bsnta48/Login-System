import React from 'react'

const App = () => {
  return (
    <div className='max-w-[1170px] px-4 mx-auto w-full'>
      <div className='h-screen flex items-center'>
        <form className='w-full max-w-[500px] mx-auto bg-gray-100 p-8 rounded-md space-y-8 drop-shadow-md'>
          <label htmlFor='username' className='block'>
            Username:
            <input id="username" type="email" className='w-full p-4 rounded-md' placeholder='Enter your email address' autoComplete='off' />
          </label>
          <label htmlFor='password' className='block'>
            Password:
            <input id="password" type="password" className='w-full p-4 rounded-md' placeholder='Enter your password' autoComplete='off' />
          </label>
          <input type="submit" className='p-4 bg-sky-500 text-white cursor-pointer rounded-md hover:bg-sky-600 transition' value="Login to your account" />
        </form>
      </div>
    </div>
  )
}

export default App