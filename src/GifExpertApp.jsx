import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Nanatsu no Taizai']);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return
    //console.log(newCategory)
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <div>GifExpertApp</div>

      {/* Se manda la referencia a la funcion (el segundo setCategories), es decir, el primer setCategories es un propiedad de mi componente addcategory el cual va a recibir la funcion */}
      <AddCategory 
        // setCategories = { setCategories }
        //Esto es una propiedad de mi componente
        onNewCategory = { (event) => onAddCategory(event)}
      />

      {categories.map( category => 
        <GifGrid key={ category } category={ category }/>
      )}
    </>
  )
}
