import { Song } from "./Song";

export const Songs = ({ allSongs }) => {
  return (
    <div className="songs-grid">
      {allSongs.map((currentSong, index) => 
        <Song song={currentSong} key={index} />
      )}
    </div>
  );
};
