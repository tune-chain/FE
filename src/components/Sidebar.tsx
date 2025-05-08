'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  PlaylistsIcon,
  TracksIcon,
  SearchIcon,
  HomeIcon,
  EllipsisIcon
} from '../icons/SidebarIcons';

interface SidebarLinkProps {
  label: string;
  icon?: React.ReactNode;
  href: string;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ label, icon, href, active }) => (
  <Link href={href}>
    <div
      className={`w-52 p-3 rounded-lg inline-flex justify-start items-center gap-2.5 cursor-pointer transition-colors ${
        active ? 'bg-neutral-600 text-neutral-300' : 'hover:bg-neutral-700 text-neutral-50'
      }`}
    >
      {icon && <div className="size-6 flex justify-start items-start overflow-hidden">{icon}</div>}
      <div className="text-sm font-medium leading-normal">{label}</div>
    </div>
  </Link>
);

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-60 h-full bg-neutral-800 px-3 pt-4 pb-8 flex flex-col gap-8 overflow-hidden">
      {/* Top logo area */}
      <div className="w-52 p-3 rounded-lg inline-flex justify-between items-center">
        <div className="p-0.5 bg-neutral-500 rounded-full w-5 h-5 text-center text-[10px] text-zinc-400 font-medium leading-normal flex items-center justify-center">
          Gi
        </div>
        <div className="relative">
          <EllipsisIcon className="w-6 h-6" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-1">
        <SidebarLink
          label="Home"
          icon={<HomeIcon className="w-6 h-6" />}
          href="/"
          active={pathname === '/'}
        />
        <SidebarLink
          label="Search"
          icon={<SearchIcon className="w-6 h-6" />}
          href="/search"
          active={pathname === '/search'}
        />
      </div>

      {/* Collections */}
      <div className="flex flex-col gap-1">
        <div className="text-zinc-400 text-xs font-medium leading-3">MY COLLECTION</div>
        <SidebarLink
          label="Music"
          icon={<TracksIcon className="w-6 h-6" />}
          href="/music"
          active={pathname === '/music'}
        />
        <SidebarLink
          label="Playlists"
          icon={<PlaylistsIcon className="w-6 h-6" />}
          href="/playlists"
          active={pathname === '/playlists'}
        />
      </div>

      {/* Custom playlists can go here */}
      <div className="flex flex-col gap-1">
        <div className="text-zinc-400 text-xs font-medium leading-3">MY PLAYLISTS</div>
      </div>
    </div>
  );
};

export default Sidebar;
