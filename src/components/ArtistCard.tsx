interface ArtistDto {
  artistId: string;
  artistName: string;
  artistImage: string;
  popularity: number;
}

export default function ArtistCard({ artist }: { artist: ArtistDto }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded shadow">
      <img src={artist.artistImage} alt={artist.artistName} className="w-16 h-16 rounded-full" />
      <div>
        <p className="font-semibold">{artist.artistName}</p>
        <p className="text-sm text-gray-500">Popularity: {artist.popularity}</p>
      </div>
    </div>
  );
}
