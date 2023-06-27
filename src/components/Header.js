import React from 'react';

const Header = ({ toggleSideBar }) => {
  return (
    <header className="fixed top-0 w-full bg-gray-400 lg:hidden z-10">
      <div className="flex items-center p-2">
        <button
          id="openBtn"
          className="text-2xl text-white px-4 py-2 hover:bg-gray-200 hover:text-black"
          onClick={toggleSideBar}
        >
          &#9776;
        </button>
        <h1 className="ml-2 text-2xl text-white font-semibold">회사 조희승</h1>
      </div>
    </header>
  );
};

export default Header;
