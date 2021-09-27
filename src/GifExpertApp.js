import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["One Puch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["One Puch"]);


/* const handleAdd = () => {
   // setCategories([...categories, 'uno mas al final']);
   // setCategories([ 'uno mas al principio',...categories])
   setCategories(cat => [...cat, 'uno mas al final']);
} */

  return (
    <div>
      <h2>Gif App</h2>
           
       <AddCategory setCategories= { setCategories } />

      <hr />
     {/*  <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
        categories.map((category, index) => (
            
             <GifGrid 
             key={category}
             category = {category} />
         ))
        }
      </ol>
    </div>
  );
};
