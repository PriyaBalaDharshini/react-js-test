import React, { useEffect, useState } from 'react';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetch('/movies.json')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching JSON:', error));
    }, []);


    const sortMovies = (order) => {
        const sortedMovies = [...movies].sort((a, b) => {
            return order === 'asc' ? a.views - b.views : b.views - a.views;
        });
        setMovies(sortedMovies);
        setSortOrder(order);
    };

    return (
        <div className="p-4">
            <div className="mb-4 flex gap-4">
                <button
                    onClick={() => sortMovies('asc')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Sort by Views (Asc)
                </button>
                <button
                    onClick={() => sortMovies('desc')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Sort by Views (Desc)
                </button>
            </div>

            <div className="flex flex-wrap gap-4">
                {movies.map((movie, index) => (
                    <div key={index} className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden">
                        <img className="w-full h-48 object-cover" src={movie.image} alt={movie.movie_title} />
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800">{movie.movie_title}</h2>
                            <p className="text-gray-600 mt-2">Genre: {movie.genre}</p>
                            <p className="text-gray-600">Director: {movie.director}</p>
                            <p className="text-gray-600">Starring: {movie.starring}</p>
                            <p className="text-gray-600">Duration: {movie.time}</p>
                            <p className="text-gray-600">Language: {movie.language}</p>
                            <p className="text-gray-600">Release Date: {movie.release_data}</p>
                            <p className="text-gray-600">Views: {movie.views}</p>
                            <p className="text-gray-600">Votes: {movie.votes}</p>
                        </div>
                        <div className="bg-gray-200 p-4 text-right">
                            <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Watch Trailer</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;
