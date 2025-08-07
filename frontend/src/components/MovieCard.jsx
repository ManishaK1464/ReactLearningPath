// movie is a variable that holds the movie data
function MovieCard({movie}) {
    function onFavoriteClick() {
        // Handle favorite click logic here
        alert("clicked");
    }


//className Actually Does It assigns a CSS class to an element. alt alternative text for the image if it fails to load
  return <div className="movie-card">
    <div className = "movie-poster ">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay"> 
            <button className="favorite-button" onClick = {onFavoriteClick}>   ♥  </button>

        </div>


    </div>

    <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p>{movie.release_date}</p>

    </div>
</div>
}

export default MovieCard;