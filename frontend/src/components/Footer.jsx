import React from 'react';
import { MdConstruction } from 'react-icons/md';
import { FaHelmetSafety } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
function Footer() {
  return (
    <footer>
      <div className="text-white w-full h-md  bg-[#101929] mt-12 flex flex-col md:flex-row space-y-12 items-center md:justify-around md:items-center">
        <div className="flex flex-row items-center space-x-2">
          <FaHelmetSafety className="text-2xl text-yellow-500" />
          <h1 className="font-medium uppercase text-xl text-">
            Unity Construction
          </h1>
        </div>

        <div className="flex flex-col space-y-6 mt-8">
          <div className="flex flex-col space-y-2">
            <p className="mx-auto">Building dreams, one brick at a time.</p>
            <p className="mx-auto">
              © 2025 Unity Construction. All rights reserved.
            </p>
          </div>

          <div className="flex flex-row space-x-2 items-center">
            <MdConstruction className="text-3xl" />
            <p>Proudly laying the foundation for a better tomorrow.</p>
          </div>
        </div>

        <div className="flex flex-row space-x-3">
          <MdOutlineMail className="text-3xl" />
          <FaPhoneAlt className="text-2xl" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
