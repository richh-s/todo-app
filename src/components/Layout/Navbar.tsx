import React, { FC } from 'react';

interface NavBarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const NavBar: FC<NavBarProps> = ({ showSidebar, toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center bg-purple-600 text-white p-4">
      <button onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className="rounded-full overflow-hidden bg-gray-200 text-black text-center">
        <img
          src="path_to_avatar_image"
          alt="R"
          className="h-9 w-9 object-cover"
        />
      </div>
    </div>
  );
};

export default NavBar;
