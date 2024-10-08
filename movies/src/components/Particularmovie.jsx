import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
const ParticularMovie = () => {
    const [trailer, setTrailer] = useState("");
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const specificMovie = location.state.cards;
    const getTrailers = async (id) => {
        if (trailer) return; // Prevent fetching if trailer is already set
        setLoading(true);
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=56ae0b492fe2fc5f33267ee4a47b2066`);
            const data = await response.json();
            if (data.results.length > 0) {
                setTrailer(data.results[0].key);
            } else {
                console.log("No trailers found");
            }
        } catch (error) {
            console.log("Failed to fetch trailer:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="movie-container">
            <div className="movie-header">
                <img 
                    src={`https://image.tmdb.org/t/p/original/${specificMovie.backdrop_path}`} 
                    alt={specificMovie.title}
                    className="movie-backdrop"
                />
                <div className="movie-info">
                    <h1 className="movie-title">{specificMovie.title}</h1>
                    <p className="movie-overview">{specificMovie.overview}</p>
                    <b className="movie-rating">Rating: {specificMovie.vote_average}</b>
                    <br />
                    <button className="trailer-button" onClick={() => getTrailers(specificMovie.id)}>
                        {loading ? "Loading..." : "Play Trailer"}
                    </button>
                </div>
            </div>
            <div className="trailer-section">
                {trailer && <YouTube videoId={trailer} className="movie-trailer" />}
            </div>
        </div>
    );
};
export default ParticularMovie;
