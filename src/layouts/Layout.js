import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <main className='space-y-8 py-8'>
            <Outlet />
        </main>
    )
}

export default Layout