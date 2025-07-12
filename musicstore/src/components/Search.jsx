import { useRef } from "react";

export const Search = ({ fn }) => {
    const artist = useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault();
            fn(artist.current.value);
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };
    
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label className="search-label">Artist Name:</label>
            <input 
                ref={artist}
                type="text" 
                placeholder="Search for your favorite artist..." 
                className="search-input"
                onKeyPress={handleKeyPress}
            />
            <button 
                type="submit" 
                className="search-button"
                onClick={handleSubmit}
            >
                🔍 Search
            </button>
        </form>
    );
}