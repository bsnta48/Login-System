import React from 'react'

const App = () => {
  return (
    <div className='max-w-[1170px] px-4 mx-auto w-full'>
      <div className='h-screen flex items-center'>
        <form className='w-full max-w-[500px] mx-auto bg-gray-100 p-8 rounded-md space-y-8 drop-shadow-md'>
          <input type="email" className='w-full p-4 rounded-md' placeholder='Enter your email address' />
          <input type="password" className='w-full p-4 rounded-md' placeholder='Enter your password' />
          <input type="submit" className='p-4 bg-slate-500 text-white cursor-pointer rounded-md hover:bg-slate-600 transition' value="Login" />
        </form>
      </div>
    </div>
  )
}

export default App