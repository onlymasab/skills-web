import React from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-12 bg-gray-950 text-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <UserButton/>
       
      </div>

      {/* Social Media Icons and Contact Button */}
      <div className="flex space-x-6 items-center">
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" legacyBehavior>
          <a className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition duration-300">
            <FaFacebookF size={20} />
          </a>
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" legacyBehavior>
          <a className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition duration-300">
            <FaTwitter size={20} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" legacyBehavior>
          <a className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition duration-300">
            <FaLinkedinIn size={20} />
          </a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="px-4 py-2 rounded-full text-lg font-semibold bg-orange-600 hover:bg-gray-700 transition duration-300">Contact Us</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;