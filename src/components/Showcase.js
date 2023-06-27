import React, { useState } from 'react';

const Showcase = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="mt-24 max-w-screen-lg mx-auto px-4 lg:ml-80">
      <div>
        <h2 className="text-gray-400 text-5xl font-semibold my-8">Showcase.</h2>
        <hr className="w-16 border-t-8 border-t-gray-400 rounded" />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <img
            className="cursor-pointer opacity-80 hover:opacity-100"
            src="https://www.w3schools.com/w3images/kitchenconcrete.jpg"
            alt=""
            onClick={() => openModal("https://www.w3schools.com/w3images/kitchenconcrete.jpg")}
          />
          <img
            className="mt-4 cursor-pointer opacity-80 hover:opacity-100"
            src="https://www.w3schools.com/w3images/livingroom.jpg"
            alt=""
            onClick={() => openModal("https://www.w3schools.com/w3images/livingroom.jpg")}
          />
          <img
            className="mt-4 cursor-pointer opacity-80 hover:opacity-100"
            src="https://www.w3schools.com/w3images/diningroom.jpg"
            alt=""
            onClick={() => openModal("https://www.w3schools.com/w3images/diningroom.jpg")}
          />
        </div>
        <div className="">
          <img
            className="cursor-pointer opacity-80 hover:opacity-100"
            src="https://www.w3schools.com/w3images/atrium.jpg"
            alt=""
            onClick={() => openModal("https://www.w3schools.com/w3images/atrium.jpg")}
          />
          <img
            className="mt-4 cursor-pointer opacity-80 hover:opacity-100"
            src="https://www.w3schools.com/w3images/bedroom.jpg"
            alt=""
            onClick={() => openModal("https://www.w3schools.com/w3images/bedroom.jpg")}
          />
          <img
            className="mt-4 cursor-pointer opacity-80 hover:opacity-100"
            src="https://www.w3schools.com/w3images/livingroom2.jpg"
            alt=""
            onClick={() => openModal("https://www.w3schools.com/w3images/livingroom2.jpg")}
          />
        </div>
      </div>

      {modalImage && (
        <div
          id="modal"
          className="fixed inset-0 bg-black/80 z-40"
          onClick={closeModal}
        >
          <img
            id="modalImage"
            className="max-w-2xl mt-24 mx-auto"
            src={modalImage}
            alt=""
          />
        </div>
      )}

        {/* SERVICES */}
        <div id="services" className="mt-24">
          <h2 className="text-gray-400 text-5xl my-8 font-semibold">Services.</h2>
          <hr className="w-16 border-t-8 border-t-gray-400 rounded" />
          <p className="my-4">
            We are an interior design service that focuses on what's best for your home and what's best for you!
        </p>
          <p className="my-4">
            Some text about our services - what we do and what we offer.
            We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        {/* DESIGNERS */}
        <div id="designers" className="mt-24">
          <h2 className="text-gray-400 text-5xl my-8 font-semibold">Designer.</h2>
          <hr className="w-16 border-t-8 border-t-gray-400 rounded"/>
        </div>
        <p className="my-4">
          The best team in the world.
        </p>
        <p className="my-4">
          We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="my-4">
          Our designers are thoughtfully chosen:
        </p>
        
        {/* MEMBER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100">
          <img 
            className="w-full"
            src="https://www.w3schools.com/w3images/team2.jpg"
            alt=""
          />
          <div className="px-4">
            <h3 className="text-2xl my-4 font-semibold tracking-wide">John Doe</h3>
            <p className="my-4 text-gray-400">CEO & Founder</p>
            <p className="my-4">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
            </p>
          </div>
        </div>
        <div className="bg-gray-100">
          <img 
            className="w-full"
            src="https://www.w3schools.com/w3images/team1.jpg"
            alt=""
          />
          <div className="px-4">
            <h3 className="text-2xl my-4 font-semibold tracking-wide">Jane Doe</h3>
            <p className="my-4 text-gray-400">Designer</p>
            <p className="my-4">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
            </p>
          </div>
        </div>
        <div className="bg-gray-100">
          <img 
            className="w-full"
            src="https://www.w3schools.com/w3images/team3.jpg"
            alt=""
          />
          <div clasName="px-4">
            <h3 className="text-2xl my-4 font-semibold trakcking-wide">Mike Ross</h3>
            <p className="my-4 text-gray-400">Architect</p>
            <p className="my-4">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
            </p>
          </div>
        </div>
      </div>

      {/* PACKAGES */}
      <div id="packages" class="mt-24">
        <h2 class="text-gray-400 text-5xl my-8 font-semibold">Packages</h2>
        <hr class="w-16 border-t-8 border-t-gray-400 rounded"/>
      </div>

      <p class="my-4">
        Some text our prices. Lorem ipsum consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul class="bg-gray-100">
          <li class="bg-gray-600 p-8">
            <h3 class="text-2xl text-white text-center">Basic</h3>
          </li>
          <li class="text-center p-4 border-b">
            Floorplanning
          </li>
          <li class="text-center p-4 border-b">
            10 hours support
          </li>
          <li class="text-center p-4 border-b">
            Photography
          </li>
          <li class="text-center p-4 border-b">
            20% furniture discount
          </li>
          <li class="text-center p-4 border-b">
            Good deals
          </li>
          <li class="p-4 border-b">
            <span class="block text-center text-3xl my-4">$ 199</span>
            <span class="block text-center text-gray-400">per room</span>
          </li>
          <li class="p-4 text-center">
            <button class="px-4 py-2 bg-white hover:bg-gray-600 hover:text-white">
              Sign Up
            </button>
          </li>
        </ul>

        <ul class="bg-gray-100">
          <li class="bg-red-600 p-8">
            <h3 class="text-2xl text-white text-center">Pro</h3>
          </li>
          <li class="text-center p-4 border-b">
            Floorplanning
          </li>
          <li class="text-center p-4 border-b">
            10 hours support
          </li>
          <li class="text-center p-4 border-b">
            Photography
          </li>
          <li class="text-center p-4 border-b">
            50% furniture discount
          </li>
          <li class="text-center p-4 border-b">
            GREAT deals
          </li>
          <li class="p-4 border-b">
            <span class="block text-center text-3xl my-4">$ 249</span>
            <span class="block text-center text-gray-400">per room</span>
          </li>
          <li class="p-4 text-center">
            <button class="px-4 py-2 text-white bg-red-600 hover:bg-gray-600">
              Sign Up
            </button>
          </li>
        </ul>
      </div>

      {/* CONTACT */}

      <div id="contact" class="mt-24">
        <h2 class="text-gray-400 text-5xl my-8 font-semibold">Contact.</h2>
        <hr class="w-16 border-t-8 border-t-gray-400 rounded"/>
      </div>

      <p class="my-4">
        Do you want us to style your home? Fill out the form and fill me in with the details ^_^ We love meeting new
        people!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img 
          class="w-full h-80 object-cover"
          src="https://www.w3schools.com/w3images/map.jpg"
          alt=""
        />
        <form action="#">
          <div class="mb-4">
            <label for="" class="font-semibold">Name</label>
            <input 
              type="text"
              class="border p-2 w-full"
            />
          </div>
          <div class="mb-4">
            <label for="" class="font-semibold">Email</label>
            <input 
              type="text"
              class="border p-2 w-full"
            />
          </div>
          <div class="mb-4">
            <label for="" class="font-semibold">Message</label>
            <input
              type="text"
              class="border p-2 w-full"
            />
          </div>
          <button class="bg-gray-600 text-white p-2 w-full hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>

      {/* FOOTER */}

      <footer class="mt-24 p-12 bg-gray-200">
        <p class="text-right">
          Powered by <a href="/"class="underline">Me</a>
        </p>
      </footer>
      
    </div>
  );
};

export default Showcase;