
import Sidebar from './Sidebar';
import UserSidebar from './UserSidebar';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const [selected, setSelected] = useState('reports');

  // Only show sidebar for /admindashboard or /userdashboard route
  const showAdminSidebar = location.pathname === '/admindashboard';
  const showUserSidebar = location.pathname === '/userdashboard';

  // Do not show header and footer for login and register pages
  const isAuthPage = location.pathname === '/adminlogin' || location.pathname === '/register' || location.pathname === '/';

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {!isAuthPage && (
        <div style={{ width: '100%', height: '60px', flexShrink: 0 }}>
          <Header />
        </div>
      )}
      <div style={{ flex: 1, display: 'flex', width: '100%', minHeight: 0, overflow: 'hidden' }}>
        {showAdminSidebar && (
          <div style={{ width: '30%', minWidth: 180, maxWidth: 280, height: '100%',  }}>
            <Sidebar selected={selected} setSelected={setSelected} />
          </div>
        )}
        {showUserSidebar && (
          <div style={{ width: '30%', minWidth: 180, maxWidth: 280, height: '100%', }}>
            <UserSidebar selected={selected} setSelected={setSelected} />
          </div>
        )}
        <div style={{ width: (showAdminSidebar || showUserSidebar) ? '90%' : '100%', height: '100%', minHeight: 0, display: 'flex', justifyContent: 'center', alignItems: 'stretch', overflow: 'auto' }}>
          <Outlet context={(showAdminSidebar || showUserSidebar) ? { selected, setSelected } : {}} />
        </div>
      </div>
      {!isAuthPage && (
        <div style={{ width: '100%', height: '150px', flexShrink: 0 }}>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
