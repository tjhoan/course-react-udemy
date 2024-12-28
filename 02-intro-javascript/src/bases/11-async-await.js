document.body.style.backgroundColor = 'black';

const getImage = async () => {
  try {
    const apiKey = 'l1mTE51DSERZY4UYn9p0fSyJXwvTSZWi';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();
