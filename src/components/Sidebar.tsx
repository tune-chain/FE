import React from 'react';
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
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ label, icon, active }) => (
  <div
    className={`w-52 p-3 rounded-lg inline-flex justify-start items-center gap-2.5 cursor-pointer ${
      active ? 'bg-neutral-600' : ''
    }`}
  >
    {icon && <div className="size-6 flex justify-start items-start overflow-hidden">{icon}</div>}
    <div className="text-neutral-50 text-sm font-medium font-['Inter'] leading-normal">{label}</div>
  </div>
);

const Sidebar: React.FC = () => {
  return (
    <div className="w-55 h-full bg-neutral-800 px-3 pt-4 pb-8 flex flex-col gap-8 overflow-hidden">
      <div className="w-50 p-3 rounded-lg inline-flex justify-between items-center">
        <div className="p-0.5 bg-neutral-500 rounded-full w-5 h-5 text-center text-[10px] text-zinc-400 font-medium leading-normal flex items-center justify-center">
          Gi
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <SidebarLink label="Home" icon={<HomeIcon className="w-6 h-6" />} />
        <SidebarLink label="Search" icon={<SearchIcon className="w-6 h-6" />} />
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-zinc-400 text-xs font-medium leading-3">MY COLLECTION</div>
        <SidebarLink label="Music" icon={<TracksIcon className="w-6 h-6" />} />
        <SidebarLink label="Playlists" icon={<PlaylistsIcon className="w-6 h-6" />} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-zinc-400 text-xs font-medium leading-3">MY PLAYLISTS</div>
      </div>
    </div>
  );
};

export default Sidebar;

