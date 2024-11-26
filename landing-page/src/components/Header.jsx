import React from 'react';

const Header = () => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <header className="bg-gray-800  shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold" style={{color:'rgb(253, 69, 86)'}}>WikiVal</h1>
        <nav className="flex gap-4">
          <button
            onClick={() => navigateTo('/')}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-red-600 transition duration-1000"
          >
            Home
          </button>
          <a
            href="/Contact"
            className="bg-blue-500 px-4 py-2 rounded hover:bg-red-600 transition duration-1000"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
