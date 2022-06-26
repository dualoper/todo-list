import { Box } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Box>
        <nav>
          <ul>
            <li>
              <Link to='/'>TODO</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/registration'>Registration</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </Box>
    </>
  )
}

export default Navbar;