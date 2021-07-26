import axios from 'axios';

const API_KEY = '21915448-ca2a23b845d7ec90c85800139';
const BASE_URL = 'https://pixabay.com/api';

const fetchImages = async (searchQuery, page) => {
  try {
    const url = `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const { data } = await axios.get(url);
    return data.hits;
  } catch (error) {
    return [];
  }
};

// return fetch(url).then(response => {
//   if (response.ok) {
//     return response.json();
//   }
//   return Promise.reject(new Error(`No images for request ${searchQuery}`));
// });

const imagesAPI = {
  fetchImages,
};

export default imagesAPI;
