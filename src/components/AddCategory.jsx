import { useState } from "react"



export const AddCategory = ({ onCategory}) => {
 
    const [inputValue, setInputValue] = useState("")
    
    const handleChange = (e)=>{
     setInputValue(e.target.value)

  
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        
      onCategory(inputValue.trim())
     
    }


  return (
    <form onSubmit={e => handleSubmit(e)}>
<input
type="text"
placeholder="Buscar Gift"
value={inputValue}
onChange={e => handleChange(e)}
/>

    </form>
  )
}
