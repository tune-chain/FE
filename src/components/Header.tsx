'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, SearchIcon } from '../icons/SidebarIcons';

const Header: React.FC = () => {
  return (
    <div className="w-full h-16 px-6 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 min-w-[180px]">
          <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-xl mx-6">
          <div className="w-full h-10 px-3 flex items-center gap-3 bg-neutral-800 rounded-xl border border-violet-100/5">
            <SearchIcon className="w-4 h-4 text-white" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent text-sm text-white placeholder-neutral-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-3 min-w-[160px] justify-end">
          <button className="text-sm font-medium text-white px-5 py-1.5 rounded-full hover:bg-neutral-700 transition">
            Login
          </button>
          <button className="text-sm font-medium text-black bg-white px-4 py-2 rounded-full hover:bg-zinc-200 transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
