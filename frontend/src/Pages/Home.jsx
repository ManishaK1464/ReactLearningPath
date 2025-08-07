function Home() {

    const movies = [
        { id : 1 ,title: "Inception", release_date: "2010-07-16", url: "https://example.com/inception.jpg" },
        {id : 2  , title: "The Matrix", release_date: "1999-03-31", url: "https://example.com/matrix.jpg" },
        {id : 3 , title: "Interstellar", release_date: "2014-11-07", url: "https://example.com/interstellar.jpg" },
        {id : 4 , title: "The Dark Knight", release_date: "2008-07-18", url: "https://example.com/darkknight.jpg" }
    ];

    return <div className = "home-page">
        <div className="movie-grid">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>

    </div>

}