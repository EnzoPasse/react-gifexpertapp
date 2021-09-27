import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category); // data: images es una forma de renombrar data

  return (
    <>
      <h3 className = "animate__animated animate__pulse">{category}</h3>
      
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      
      
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>

    </>
  );
};
