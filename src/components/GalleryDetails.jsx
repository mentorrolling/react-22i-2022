import React, { useEffect } from "react";

const GalleryDetails = ({ descripcion }) => {
  useEffect(() => {
    console.log("Mostrando descripción");
  }, []);

  //cuando se desmonta
  useEffect(() => {
    return () => {
      console.log("Me desmonté 😭");
    };
  }, []);

  return <p>{descripcion}</p>;
};

export default GalleryDetails;
