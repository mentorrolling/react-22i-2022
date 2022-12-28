import React from "react";
import moviesList from "../data/movies.json";

const MovieList = ({ cant = 100 }) => {
  //   const { cant } = props;
  console.log(cant);

  const listPelis = moviesList.filter((movie) => {
    return movie.rank <= cant;
  });

  return (
    <div>
      <h3>{cant} más populares</h3>
      <div className="poster">
        {listPelis.map((movie) => (
          <div className="container-img" key={movie.id}>
            <img
              className="movie-grid-image"
              src={movie.image}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
