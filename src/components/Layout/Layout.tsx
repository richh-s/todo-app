// Layout.tsx
import React, { ReactNode, useState } from 'react';
import NavBar from './Navbar';
import SideBar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex min-h-screen">
      {/* Render the SideBar component */}
      <div className={`fixed top-0 left-0 h-screen ${showSidebar ? 'w-64' : 'w-0'} bg-gray-200 overflow-y-auto transition-all duration-300 ease-in-out z-50`}>
        {showSidebar && <SideBar />}
      </div>
      <div className={`flex-1 ${showSidebar ? 'ml-64' : ''}`}>
        {/* Render the NavBar component */}
        <NavBar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        {/* Render the main content */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
