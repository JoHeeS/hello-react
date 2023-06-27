import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Home = () => {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const toggleSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const closeSideBar = () => {
    setSideBarVisible(false);
  };

  return (
    <div>
      <Header toggleSideBar={toggleSideBar} />
      <Sidebar
        sideBarVisible={sideBarVisible}
        closeSideBar={closeSideBar}
      />
      <h2>Main Content</h2>
    </div>
  );
};

export default Home;
