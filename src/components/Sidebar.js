import React from 'react';

const Sidebar = ({ sideBarVisible, closeSideBar }) => {
  const handleOverlayClick = (event) => {
    if (event.target.id === 'overlay') {
      closeSideBar();
    }
  };

  return (
    <>
      <nav
        id="sideBar"
        className={`fixed top-0 left-0 w-80 h-full bg-gray-400 px-4 ${
          sideBarVisible ? '' : 'hidden'
        } lg:block z-30`}
      >
        <div className="mt-12 h-48 px-4 flex flex-col justify-center">
          <h2 className="text-2xl text-white font-semibold">
            회사 조희승
          </h2>
        </div>
        <ul>
          <li>
            <a
              href='#home'
              className="block text-lg font-semibold text-white px-4 py-2 hover:bg-gray-200 hover:text-black"
              onClick={closeSideBar}
            >
              홈
            </a>
          </li>
          <li>
            <a
              href="#showcase"
              className="block text-lg font-semibold text-white px-4 py-2 hover:bg-gray-200 hover:text-black"
              onClick={closeSideBar}
            >
              쇼케이스
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block text-lg font-semibold text-white px-4 py-2 hover:bg-gray-200 hover:text-black"
              onClick={closeSideBar}
            >
              서비스
            </a>
          </li>
          <li>
            <a
              href="#designers"
              className="block text-lg font-semibold text-white px-4 py-2 hover:bg-gray-200 hover:text-black"
              onClick={closeSideBar}
            >
              디자이너
            </a>
          </li>
          <li>
            <a
              href="#packages"
              className="block text-lg font-semibold text-white px-4 py-2 hover:bg-gray-200 hover:text-black"
              onClick={closeSideBar}
            >
              패키지
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-lg font-semibold text-white px-4 py-2 hover:bg-gray-200 hover:text-black"
              onClick={closeSideBar}
            >
              연락처
            </a>
          </li>
        </ul>
      </nav>
      {sideBarVisible && (
        <>
          <div
            id="overlay"
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20"
            onClick={handleOverlayClick}
          ></div>
          <div className="fixed top-0 left-0 w-80 h-full z-30">
            {/* 사이드바 컨텐츠 */}
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
