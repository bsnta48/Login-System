import React, { useState } from 'react'

const Register = () => {

    const [userData, setUserData] = useState({})

    const handleInputChange = key => value => {
        setUserData({ ...userData, [key]: value })
    }

    const handleName = key => value => {
        let name = {};
        name = { ...userData.name, [key]: value }
        handleInputChange('name')(name)
    }

    const { firstname, lastname, email, username, password } = userData;

    return (
        <form className='w-full max-w-[500px] mx-auto bg-gray-100 p-8 rounded-md space-y-8 drop-shadow-md'>
            <label htmlFor='firstname' className='block'>
                Your first name:
                <input
                    id="firstname"
                    name="firstname"
                    value={firstname}
                    type="text"
                    className='w-full p-4 rounded-md'
                    placeholder='Enter your first name'
                    autoComplete='off'
                    onChange={e => handleName(e.target.name)(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='lastname' className='block'>
                Your last name:
                <input
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    type="text"
                    className='w-full p-4 rounded-md'
                    placeholder='Enter your email address'
                    autoComplete='off'
                    onChange={e => handleName(e.target.name)(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='email' className='block'>
                Your email address:
                <input
                    id="email"
                    name="email"
                    value={email}
                    type="text"
                    className='w-full p-4 rounded-md'
                    placeholder='Enter your email address'
                    autoComplete='off'
                    onChange={e => handleInputChange(e.target.name)(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='username' className='block'>
                Username:
                <input
                    id="username"
                    name="username"
                    value={username}
                    type="text"
                    className='w-full p-4 rounded-md'
                    placeholder='Type username'
                    autoComplete='off'
                    onChange={e => handleInputChange(e.target.name)(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='password' className='block'>
                Password:
                <input
                    id="password"
                    name="password"
                    value={password}
                    type="password"
                    className='w-full p-4 rounded-md'
                    placeholder='Enter your password'
                    autoComplete='off'
                    onChange={e => handleInputChange(e.target.name)(e.target.value)}
                    required
                />
            </label>
            <input type="submit" className='p-4 bg-sky-500 text-white cursor-pointer rounded-md hover:bg-sky-600 transition' value="Login to your account" />
        </form>
    )
}

export default Register