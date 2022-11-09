
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);
    //console.log(categories);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //console.log(newCategory);
        //const nuevaCat = 'Deamon Slayer';        
        //Agrega elementos al inicio
        setCategories([newCategory, ...categories]);
        //Agregaa Elementos al final
        //setCategories([...categories, nuevaCat]);
        //setCategories(cat => [...cat, nuevaCat]);
    }


    return (
        <>
            {/* Titulo   */}
            <h1>GidtExpertApp</h1>
            {/* Input   */}
            <AddCategory
                //No esta mal pero no valida
                //setCategories={ setCategories }
                onNewCategory={(event) => onAddCategory(event)}

            ></AddCategory>
            {/* Listado de Gif   */}

            {
                categories.map((category) =>
                (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

            {/* Gif Item   */}
            {/*<button onClick={ onAddCategory }>Agregar</button>*/}

        </>
    )
}