'use client';

import React from 'react';
import Image from 'next/image';

interface PlaylistCardProps {
  title: string;
  artist: string;
  image: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ title, artist, image }) => {
  return (
    <div className="w-48 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
      {/*이미지 */}
      <div className="relative w-48 h-52 bg-neutral-50 rounded-[3px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* 텍스트 콘텐츠 */}
      <div className="flex flex-col justify-center items-start gap-1 w-full overflow-hidden">
        <div className="text-neutral-50 text-sm font-semibold leading-tight">{title}</div>
        <div className="text-neutral-50/60 text-sm font-semibold leading-tight">{artist}</div>
      </div>
    </div>
  );
};

export default PlaylistCard;
