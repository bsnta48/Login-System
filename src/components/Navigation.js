import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container';

const Navigation = () => {
    return (
        <header className='py-4 bg-gray-100 sticky top-0 z-50'>
            <Container>
                <nav className='flex flex-wrap'>
                    <Link to="/" className=' font-semibold'>
                        Brand
                    </Link>
                    <ul className='flex flex-wrap ml-auto'>
                        <li><Link to="/" className='py-2 px-4'>Home</Link></li>
                        <li><Link to="/about" className='py-2 px-4'>About</Link></li>
                        <li><Link to="/admin" className='py-2 px-4'>Admin</Link></li>
                        <li><Link to="/login" className='py-2 px-4'>Login</Link></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Navigation