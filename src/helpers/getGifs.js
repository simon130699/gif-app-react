export const getGifs = async(categoria)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=LO7w5Yqvsfh7R3IzbvGts1IFvD9Q46Lt&q=${categoria}&limit=5`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(({id,title,images})=>({
      id: id,
      title: title,
      url:images.downsized_medium 
    }))
    // console.log(gifs)
    return gifs;
  }