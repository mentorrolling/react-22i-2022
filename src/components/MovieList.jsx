import React from "react";
import moviesList from "../data/movies.json";
import CardMovie from "./CardMovie";

const MovieList = ({ cant = 100 }) => {
  //   const { cant } = props;
  console.log(cant);

  const listPelis = moviesList.filter((movie) => {
    return movie.rank <= cant;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submit!!");
    console.log("ya me lo aprendí");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Buscar</button>
      </form>
      <h3>{cant} más populares</h3>
      <div className="poster">
        {listPelis.map((movie) => (
          <CardMovie pelicula={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
