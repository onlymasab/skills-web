"use client";
import React, { useState, useEffect } from 'react';
import { LuFileSpreadsheet } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Sidemenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-col h-screen text-white bg-gray-800">
      <div className='h-full'>
        {/* Sidebar */}
        <aside className={`shadow-md h-full ${isSidebarOpen ? 'w-56' : 'w-20'} lg:w-60 lg:h-full bg-gray-800`}>
          <nav className="flex flex-col mt-6 px-2 space-y-2 text-sm">
            <div className="lg:hidden px-4 py-1 h-full">
              <button onClick={toggleSidebar} className="text-gray-200">
                {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
            <div className={`inline-flex items-center gap-2 py-4 h-full lg:h-full px-4 rounded transition-all duration-300 ease-in-out 
              ${isActive('/admin') ? 'bg-orange-600 text-white' : 'text-white hover:bg-orange-600 hover:text-white'}`}>
              <LuFileSpreadsheet className='text-2xl' />
              {isSidebarOpen && <a href="/admin" className="text-lg">Dashboard</a>}
            </div>
            <div className={`inline-flex items-center gap-2 py-4 h-full lg:h-full px-4 rounded transition-all duration-300 ease-in-out 
              ${isActive('/pages/urltask') ? 'bg-orange-600 text-white' : 'text-white hover:bg-orange-600 hover:text-white'}`}>
              <TbReportSearch className="text-2xl" />
              {isSidebarOpen && <a href={"/admin/urltask"} className="text-lg">Assignments</a>}
            </div>
            <div className={`inline-flex items-center gap-2 py-4 h-full lg:h-full px-4 rounded transition-all duration-300 ease-in-out 
              ${isActive('/dmin/logindetail') ? 'bg-orange-600 text-white' : 'text-white hover:bg-orange-600 hover:text-white'}`}>
              <PiStudentBold className="text-2xl" />
              {isSidebarOpen && <a href={"/admin/logindetail"} className="text-lg">Login Details</a>}
            </div>
            <div className={`inline-flex items-center gap-2 py-4 h-full lg:h-full px-4 rounded transition-all duration-300 ease-in-out 
              ${isActive('/') ? 'bg-orange-600 text-white' : 'text-white hover:bg-orange-600 hover:text-white'}`}>
              <MdLogout className="text-2xl" />
              {isSidebarOpen && <a href="/" className="text-lg">Logout</a>}
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Sidemenu;