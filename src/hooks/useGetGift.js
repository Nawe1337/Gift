import { useState,useEffect } from "react"
import { getGift } from "../assets/helpers/getGiflt"

export const useGetGift = (e) => {

    const [image, setImage] = useState([""])
    const [isLoading, setIsloadin] = useState(true)

const getImage = async()=>{
 const img = await getGift(e)
 setImage(img)
 setIsloadin(false)

}


useEffect( ()=>{
  // getGift(e).then( (newImage) => (setImage(newImage)) )
  getImage()

 
},[] )

  return {

  image: image,
  isLoading: isLoading
  
  }
    
}
