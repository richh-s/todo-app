// SideBar.tsx
import React, { useState } from 'react';

const SideBar: React.FC = () => {
  const [showTasks, setShowTasks] = useState(false);

  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="bg-gray-200 h-screen w-64 flex flex-col">
      <div className="p-4 border-b border-gray-300">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Tasks</h2>
          <button onClick={toggleTasks} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${showTasks ? 'transform rotate-180' : ''} text-gray-500 transition-transform duration-300 ease-in-out`}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V3.75A.75.75 0 0110 3z"
                clipRule="evenodd"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        {showTasks && (
          <ul className="mt-2">
            {/* Render tasks here */}
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ul>
        )}
      </div>
      <button className="p-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700 mt-4 w-[60%] mx-auto">
        Add New Task
      </button>
    </div>
  );
};

export default SideBar;
