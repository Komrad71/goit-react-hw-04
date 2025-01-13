import axios from 'axios';
// npm install axios
// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '47085214-4cff0ba1bb96c64321ec3a8d9';
const BASE_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'a_hgbQf36zo272hjDZlr_BZ3Ei6uKxZiFZM0TPnTw6g';


const FetchImages = async (query, page) => {
  const {data} = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });

  return data;

};


export default FetchImages;