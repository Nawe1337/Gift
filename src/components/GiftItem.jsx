export const GiftItem = ({title, img,id}) => {
  console.log(title,img,id);
  return (
    <>
    <div>
    <li>{title}</li>
    <img src={img} alt="" />
    </div>

    </>
  )
}
