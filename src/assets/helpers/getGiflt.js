export const getGift = async(e)=> {
    const urlGift = `https://api.giphy.com/v1/gifs/search?api_key=28vRj9e0gWFo58QLaRWvx0mCwgWpp5xv&q=${e}&limit=10`
    const resp = await fetch(urlGift)
    const {data} = await resp.json();
  
    const giftObject = data.map( (img)=> {

return {
  id: img.id,
  title: img.title,
  url : img.images.downsized_medium.url
  
  }})
  
  
  return giftObject;
  
  }
  