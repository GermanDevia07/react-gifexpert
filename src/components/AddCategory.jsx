import { useState } from "react"


export const AddCategory = ({onNewValueEvent}) => { // se recibe el dato

    const [inputValue, setinputValue] = useState('');
    const onInputChange = (event) => {
        setinputValue(event.target.value);
    
    }
    const onSubmit = (event) => {
        event.preventDefault(); //se usa para que no se recargue (refresh) la pagina
        //categories(Setcategories => [inputValue,...Setcategories]);
        if(inputValue.trim().length <=1 ) return;//si el inputvalue no tiene nada no hace nada
        onNewValueEvent(inputValue.trim());
        setinputValue('');
       
    }
      
  return (
    <form onSubmit={onSubmit}> 
        <input
            type="text"
            placeholder="Buscar gif"
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />
    </form>
    
  )
}
