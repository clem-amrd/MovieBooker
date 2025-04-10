import React, { useEffect, useState } from 'react';
import { useUser } from "../../contexts/UserContext";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const { user } = useUser();

    const fetchMovies = async (page) => {
        try {
            const response = await fetch(`https://prolinker.onrender.com/movies?page=${page}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();

            setMovies(data.results);

            setHasMore(page < data.total_pages);
        } catch (error) {
            console.error('Erreur lors du fetch des films :', error);
        }
    };

    // Mettre à jour les films lorsque le numéro de page change
    useEffect(() => {
        fetchMovies(page);
    }, [page, user.access_token]); // Assurez-vous de mettre `user.access_token` dans les dépendances

    return (
        <div>
        <section className="tiles">
            {movies.map((movie) => (
                <article key={movie.id} className="style1">
                    <span className="image">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                        />
                    </span>
                    <a>
                        <h2>{movie.title}</h2>
                        <div className="content">
                            <p>{movie.overview}</p>
                        </div>
                    </a>
                </article>
            ))}
            </section>
            <br></br>
            <div className="flex justify-center gap-4 mt-6">
                <button
                    className="bg-gray-300 px-2 py-2 rounded"
                    disabled={page <= 1}
                    onClick={() => setPage((prev) => prev - 1)}
                >
                    Précédent
                </button>
                <span className="px-2 py-2">{page}</span>
                <button
                    className="bg-gray-300 px-2 py-2 rounded"
                    disabled={!hasMore}
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    Suivant
                </button>
            </div>
            </div>
    );
};

export default Movies;
