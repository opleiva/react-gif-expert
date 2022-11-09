import { useState } from 'react'

export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChanche = ({ target }) => {
        // O podria desestructurar el event y usar { target }, o llamar al evento y usar evento.taget.
        //console.log(target.value);
        setInputValue(target.value);
    }
    const onSubmit = (event) =>{
        //console.log(event);
        event.preventDefault();
        const inputV = inputValue.trim();
        if(inputV.length<=1) return;
        //console.log(inputValue);
        //setCategories(categories => [inputValue, ...categories])
        onNewCategory( inputV );
        setInputValue('');
    }
    return (
        /* <form onSubmit={(event)=> onSubmit(event)}> */
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifts"
                value={inputValue}
                onChange={(event) => onInputChanche(event)}
            />
        </form>

    )
}
