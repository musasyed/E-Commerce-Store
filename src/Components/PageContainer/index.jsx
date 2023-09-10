import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const PageContainer = () => {
  return (
    <div>

    <Navbar />
        <Outlet />
    </div>
  )
}

export default PageContainer;