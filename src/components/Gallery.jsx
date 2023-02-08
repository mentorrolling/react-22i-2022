import React, { useState, useEffect } from "react";
import { sculptureList } from "../data/data.js";
import GalleryDetails from "./GalleryDetails.jsx";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  //cuando se monta el componente
  useEffect(() => {
    //efecto de lo que sucede
    alert("Bienvenido a la galería de arte. Esperamos que la disfrutes 👍");
  }, []); //arreglo de dependencias

  //cuando el componente se actualiza
  useEffect(() => {
    console.log(escultura.alt);
  }, [index]);

  let escultura = sculptureList[index];
  //   console.log(escultura);
  return (
    <>
      <button
        onClick={() => setIndex(index - 1)}
        disabled={index >= 1 ? false : true}
      >
        Back
      </button>
      <button
        onClick={() => setIndex(index + 1)}
        disabled={index + 1 < sculptureList.length ? false : true}
      >
        Next
      </button>
      <h2>
        "{escultura.name}" by {escultura.artist}
      </h2>
      <h3>
        {index + 1} of {sculptureList.length}
      </h3>
      <img src={escultura.url} alt={escultura.alt} />
      <div className="btn-show">
        <button onClick={() => setShow(!show)}>
          {show ? "Hide Details" : "Show Details"}
        </button>
        {/* {show && <p>{escultura.description}</p>} */}
        {show && <GalleryDetails descripcion={escultura.description} />}
      </div>
    </>
  );
};

export default Gallery;
