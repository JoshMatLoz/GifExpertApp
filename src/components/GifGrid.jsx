import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )

  console.log({isLoading})

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h2>Cagando...</h2>)
      }
      <div className="card-grid">
        {
          //El parentesis en vez de la llave es para un return implicito
          images.map( (image) => (
            <GifGridItem 
              key={image.id}
              //Todas las propiedades que vienen en el image, yo las estoy esparciendo en este gifgriditem
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}
