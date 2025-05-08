import Header from './Header';
import Sidebar from './Sidebar';
import PlaylistSlider from './PlaylistSlider';
import PlayerBar from './PlayerBar';

const mockPlaylists = [
  {
    image: 'https://placehold.co/255x257',
    title: 'My New Arrivals',
    artist: 'Ye',
  },
  {
    image: 'https://placehold.co/255x257',
    title: 'Coexist',
    artist: 'Album by The XX',
  },
  {
    image: 'https://placehold.co/255x257',
    title: 'My New Arrivals',
    artist: 'Ye',
  },
  {
    image: 'https://placehold.co/255x257',
    title: 'Coexist',
    artist: 'Album by The XX',
  },
  {
    image: 'https://placehold.co/255x257',
    title: 'After Hours',
    artist: 'The Weeknd',
  },
];

export default function PlayerPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* 헤더는 항상 최상단 */}
      <Header />

      {/* 메인 컨텐츠 영역 */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 bg-neutral-800 overflow-y-scroll">
          <div className="px-8 pt-8 space-y-10">
            <PlaylistSlider title="Recommendation" items={mockPlaylists} />
            <PlaylistSlider title="Recent" items={mockPlaylists} />
          </div>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}
