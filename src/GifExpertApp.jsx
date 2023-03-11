import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['one punch','Dragon ball z']);

    const onAddCategory = (newValue) => {
        if(categories.includes(newValue)) return; //No permite adiconar datos repetidos
        setcategories([newValue,...categories]);
    }
   
  return (
    <>
        <h1>Gif Expert App</h1>
        <AddCategory 
            onNewValueEvent={(value) => onAddCategory(value)}
        />
            <ol>
                { 
                    categories.map((category) => (
                        <GifGrid key={category}
                        category={category}
                        />
                    )) 
                }
            </ol>
        </>
  )
}
