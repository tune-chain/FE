'use client';

import React from 'react';
import PlaylistCard from './PlaylistCard';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons/SidebarIcons';

interface PlaylistItem {
  image: string;
  title: string;
  artist: string;
}

interface PlaylistSliderProps {
  title: string;
  items: PlaylistItem[];
}

const PlaylistSlider: React.FC<PlaylistSliderProps> = ({ title, items }) => {
  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-neutral-50 text-lg font-semibold">{title}</h2>
        <div className="flex gap-2">
          <button className="w-6 h-6 p-1 bg-neutral-800 rounded-full border border-violet-100/5 text-white opacity-60">
            <ArrowLeftIcon className="w-4 h-4" />
          </button>
          <button className="w-6 h-6 p-1 bg-neutral-800 rounded-full border border-violet-100/5 text-white">
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-2 pb-2">
        {items.map((item, index) => (
          <PlaylistCard
            key={index}
            image={item.image}
            title={item.title}
            artist={item.artist}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistSlider;
