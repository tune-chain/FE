// components/PlayerBar.tsx
'use client';

import { useRef, useState } from 'react';
import { Pause, Play, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from 'lucide-react';

export default function PlayerBar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="fixed bottom-0 w-full bg-neutral-900 h-24 border-t border-zinc-800 flex items-center px-4">
      <audio
        ref={audioRef}
        src="/music/sample.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* 좌측 - 곡 정보 */}
      <div className="flex items-center gap-4 w-1/3">
        <img src="/music/cover.jpg" alt="cover" className="w-14 h-14 rounded" />
        <div className="text-white text-sm">
          <div className="font-medium">Tune Jo Na Kaha</div>
          <div className="text-xs text-gray-400">Pritam, Mohit Chauhan</div>
        </div>
      </div>

      {/* 중앙 - 컨트롤 */}
      <div className="flex flex-col items-center w-1/3">
        <div className="flex gap-4 text-white mb-1">
          <Shuffle size={18} className="opacity-70 hover:opacity-100 cursor-pointer" />
          <SkipBack size={18} className="cursor-pointer" />
          <button onClick={togglePlay}>
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
          <SkipForward size={18} className="cursor-pointer" />
          <Repeat size={18} className="opacity-70 hover:opacity-100 cursor-pointer" />
        </div>
        <div className="flex items-center gap-2 w-full text-xs text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => {
              const time = Number(e.target.value);
              if (audioRef.current) {
                audioRef.current.currentTime = time;
                setCurrentTime(time);
              }
            }}
            className="w-full h-1 accent-green-500"
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* 우측 - 볼륨 등 */}
      <div className="flex items-center gap-2 justify-end w-1/3 text-white pr-4">
        <Volume2 size={20} />
        <input type="range" min={0} max={1} step={0.01} defaultValue={1} className="w-24 accent-green-500" />
      </div>
    </div>
  );
}
