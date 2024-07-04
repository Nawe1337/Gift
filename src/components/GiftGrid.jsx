import { useEffect, useState } from "react"
import { getGift } from "../assets/helpers/getGiflt"
import { GiftItem } from "./GiftItem"
import "../styles.css"

export const GiftGrid = ({e}) => {

const [image, setImage] = useState([""])

const getImage = async()=>{
 const img = await getGift(e)
 setImage(img)

}


useEffect( ()=>{
  // getGift(e).then( (newImage) => (setImage(newImage)) )
  getImage()

 
},[] )



  return (
 <>
<h3>{e}</h3>
 <div className="card-grid">
            {image.map((image, index)=> {

return(
<GiftItem key={image.id} {...image} />
)})}
</div>
</>
)}

