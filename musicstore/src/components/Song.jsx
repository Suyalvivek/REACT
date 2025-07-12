export const Song = ({ song }) => {
    return (
        <div className="song-card">
            <div className="song-art">🎵</div>
            <div className="song-artist">{song.artistName}</div>
            <div className="song-title">{song.trackName}</div>
        </div>
    );
};