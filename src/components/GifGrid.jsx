import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import LoaderComponent from './LoaderComponent';

const GifGrid = ({categoria}) => {
  
  const {img,isLoader} = useFetchGifs(categoria);

  return (
    <>
        <h3>{categoria}</h3>
        {isLoader&&<LoaderComponent/>}
        <div className='card-grid'>
        {
          img.map((image) => (
                        <GifItem 
                        key={image.id} 
                        {...image} //USE UN SPREED OPERATOR PARA EXPARSIR LAS PROPIEDADES DEL OBJETO IMAGE QUE VIENE DE LA api
                        

                        // tambien puede hacerse asi
                        // key={image.id} 
                        // url={image.url} 
                        // titulo={image.title}
                        
                        />
                           )
                 )
        }
      </div>
    </>
  )
}

export default GifGrid
