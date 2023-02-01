import React from "react";

const CardMovie = ({ pelicula }) => {
  //javascript
  const alertDescription = (descripcion) => alert(descripcion);

  return (
    <div
      className="container-img"
      onClick={() => {
        alertDescription(pelicula.description);
      }}
    >
      <img
        className="movie-grid-image"
        src={pelicula.image}
        alt={pelicula.title}
      />
    </div>
  );
};

export default CardMovie;
