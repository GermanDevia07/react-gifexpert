import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [IsLoading, setIsLoagind] = useState(true);
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoagind(false);
  }

  useEffect(() => {
    getImages();
  }, []);

 return {
    images,
    IsLoading
 }
}
