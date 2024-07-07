import "../styles.css"
import { useGetGift, GiftItem } from "./index.js"

export const GiftGrid = ({e}) => {

const { image, isLoading } = useGetGift(e)


  return (
 <>
<h3>{e}</h3>
{isLoading ? (<h2> Cargando... </h2>) : null}
 <div className="card-grid">
            {image.map((image, index)=> {

return(


<GiftItem key={image.id} {...image} />
)})}
</div>
</>
)}

