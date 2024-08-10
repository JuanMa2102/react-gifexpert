import { useEffect, useState } from "react";
import { GetGifs } from "../helpers/getGifs"

export const useFetchGIfs = ( category ) => { 

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifs= async()=>{
        const newImages = await GetGifs(category);
        setimages( newImages )
        setIsLoading( false )
    }

    useEffect( () => {
        getGifs()
    },[])

  return{
    images,
    isLoading,
  }
}
