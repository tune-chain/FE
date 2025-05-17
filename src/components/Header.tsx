'use client';

import React from 'react';
import Image from 'next/image';
import { SearchIcon } from '../icons/SidebarIcons';
import WalletConnect from './Wallet';

const Header: React.FC = () => {
  return (
    <div className="w-full h-16 px-6 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
        {/* Left: Logo */}
        <Image src="/logo.png" alt="Logo" width={150} height={50} />

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
            <div className="flex items-center gap-2 min-w-[180px]">
              <WalletConnect/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
