import { useState } from "react";
import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";

export const SearchPage = () => {
    const [allSongs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const getArtistName = async (artistName) => {
        if (!artistName.trim()) return;
        
        setLoading(true);
        try {
            const songs = await getSongs(artistName);
            setSongs(songs);
        } catch (error) {
            console.error('Error fetching songs:', error);
            setSongs([]);
        } finally {
            setLoading(false);
    }
    }
    
    return (
        <div className="container">
            <h1 className="page-title">🎵 Music Store</h1>
            <div className="search-container">
                <Search fn={getArtistName} />
            </div>
            {loading ? (
                <div className="loading">🔍 Searching for songs...</div>
            ) : allSongs.length > 0 ? (
                <Songs allSongs={allSongs} />
            ) : (
                <div className="no-results">
                    🎤 Search for your favorite artist to discover amazing songs!
                </div>
            )}
    </div>
    );
}