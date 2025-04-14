export  const getGifs = async(category) =>{
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=rKNZGYE1KksSKZk6OElV1s8Xp1n0POzR&q=${category}&limit=20`
  const response = await fetch(URL)
  const { data } = await response.json()


  const gifs = data.map( img =>({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifs
}