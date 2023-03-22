import React from 'react'
import { Outlet } from 'react-router-dom';
import { Header } from '../Components';
import Sidebar from './Sidebar';

// UNUSED
const Layout = () => {
    return (
        <div className='flex flex-row'>
            <Header />
            <Sidebar />
        <h1>Hellow world</h1>
            <main className='App flex'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
