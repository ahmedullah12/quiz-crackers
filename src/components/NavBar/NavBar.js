import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-slate-600  p-4 flex justify-center'>
            <nav className='flex w-4/5  justify-between'>
                <h3 className='text-3xl text-orange-600 font-bold'>Quiz Today</h3>
                <div className='w-64 flex justify-around text-white  '>
                    <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;