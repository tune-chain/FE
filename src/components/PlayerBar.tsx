'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  LikeIcon,
  EllipsisIcon,
  ShuffleIcon,
  RewindIcon,
  PlayFilledIcon,
  PauseIcon,
  ForwardIcon,
  RepeatIcon,
  VolumeIcon,
  ChromecastIcon,
  QueueIcon,
  ArrowLeftIcon
} from '../icons/SidebarIcons';

const PlayerBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <div className="w-full px-4 py-3.5 bg-neutral-800 flex justify-between items-center gap-10">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <Image
          src="https://placehold.co/64x65"
          alt="cover"
          width={64}
          height={64}
          className="rounded-md"
        />
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-neutral-50">Angels</span>
            <LikeIcon className="w-4 h-4 text-white" />
            <EllipsisIcon className="w-4 h-4 text-white" />
          </div>
          <div className="text-sm text-neutral-400 font-semibold">The XX</div>
          <div className="text-[10px] text-neutral-400 font-semibold uppercase">Playing from: Coexist</div>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-center gap-4 flex-1">
        <div className="flex items-center gap-6">
          <ShuffleIcon className="w-4 h-4" />
          <RewindIcon className="w-4 h-4" />
          <button onClick={handleTogglePlay}>
            {isPlaying ? (
              <PauseIcon className="w-6 h-6" />
            ) : (
              <PlayFilledIcon className="w-6 h-6" />
            )}
          </button>
          <ForwardIcon className="w-4 h-4" />
          <RepeatIcon className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-4 w-full">
          <span className="text-[10px] text-white font-semibold">0:00</span>
          <div className="flex-1 h-1 bg-neutral-600 rounded-full" />
          <span className="text-[10px] text-white font-semibold">0:00</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 pr-4">
        <VolumeIcon className="w-6 h-6" />
        <ChromecastIcon className="w-6 h-6" />
        <QueueIcon className="w-6 h-6" />
        <div className="p-3 rotate-90 bg-neutral-800 rounded-lg border border-violet-100/5">
          <ArrowLeftIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
