import { useState } from "react"
import { AddCategory , GiftGrid } from "./index.js"


export const GiftExpertApp = () => {

const [categories, setCategories] = useState(['inosuke'])

const onCategory = (event) =>{
 if (categories.includes(event)) return;
 setCategories(preCategori =>[event,...preCategori])
}


  return (
    <>
  <h1>GiftExpertApp</h1>
 <AddCategory 
 onCategory={ (event) => onCategory(event) }/>
  <button > agregar </button>
  <ol>
    
      {categories.map( (e) => (<GiftGrid key={e}  e={e}/>))}
   
  </ol>
  </>
  )
}
