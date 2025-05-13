'use client';

import React from 'react';
import {
  PlaylistsIcon,
  SearchIcon,
  HomeIcon,
} from '../icons/SidebarIcons';

interface SidebarLinkProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ label, icon, active }) => (
  <div
    className={`w-40 p-4 rounded-lg inline-flex justify-start items-center gap-3 cursor-pointer ${
      active ? 'bg-neutral-600' : ''
    }`}
  >
    {icon && <div className="w-6 h-6 flex justify-center items-center">{icon}</div>}
    <span className="text-neutral-50 text-sm font-medium">{label}</span>
  </div>
);

const Sidebar: React.FC = () => {
  return (
    <div className="w-59 h-full bg-neutral-800 px-2 pt-12 pb-8 flex flex-col gap-8">
      {/* 메뉴 */}
      <div className="flex flex-col gap-1">
        <SidebarLink label="Home" icon={<HomeIcon className="w-6 h-6" />} />
        <SidebarLink label="Search" icon={<SearchIcon className="w-6 h-6" />} />
        <SidebarLink label="Playlists" icon={<PlaylistsIcon className="w-6 h-6" />} /> 
      </div>
    </div>
  );
};

export default Sidebar;
