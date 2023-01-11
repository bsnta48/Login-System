import React, { useState } from 'react';
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from 'react-router-dom';
// import axios from "../api/axios";
import axios from "axios";
const LOGIN_URL = "/auth/login";

const Login = () => {

    const { setAuth, auth } = useAuth();
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleInputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [key]: value })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios({
                method: 'post',
                url: 'https://fakestoreapi.com/auth/login',
                data: userData,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setAuth({ token: response?.data?.token })
            setLoading(false)
            navigate(from, { replace: true })
        } catch (error) {
            if (!error?.response) {
                console.log('No server response!')
            } else if (error?.response?.status === 400) {
                console.log('Username and Password missing')
            } else if (error?.response?.status === 401) {
                console.log('Unauthorized')
            } else {
                console.log('Login failed')
            }
        }
    }

    return (
        <div className='max-w-[1170px] px-4 mx-auto w-full'>
            <div className='min-h-[700px] flex items-center'>
                <form onSubmit={handleLogin} className='w-full max-w-[500px] mx-auto bg-gray-100 p-8 rounded-md space-y-8 drop-shadow-md'>
                    <label htmlFor='username' className='block'>
                        Username:
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className='w-full p-4 rounded-md mt-2'
                            placeholder='Enter your email address'
                            autoComplete='off'
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label htmlFor='password' className='block'>
                        Password:
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className='w-full p-4 rounded-md mt-2'
                            placeholder='Enter your password'
                            autoComplete='off'
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <input
                        type="submit"
                        className={
                            `p-4 bg-sky-500 text-white cursor-pointer rounded-md hover:bg-sky-600 transition
                            ${loading && ' opacity-50 cursor-wait' || ''}`
                        }
                        value="Login to your account"
                        disabled={loading}
                    />
                </form>
            </div>
        </div>
    )
}

export default Login