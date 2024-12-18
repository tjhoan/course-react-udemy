export const getGifs = async category => {
  const API = 'YPAs1D451sB59i8SlhfuR6n5nJCAWs2b';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images.downsized_medium.url
    };
  });
  return gifs;
};
