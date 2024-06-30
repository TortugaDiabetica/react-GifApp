import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'Naruto' ]);

    const onAddCategory = ( newCategory ) => {

        // Validando que no se repita el mismo elemento independiente del case sensitive:
        if ( categories.map( (cat) => { return cat.toLowerCase() } ).includes( newCategory.toLowerCase() ) ) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>Funny Gifs 👌</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            { categories.map( (category) => 
                <GifGrid key={ category } 
                        category={ category } />
                )
            }
        </>
    )
};