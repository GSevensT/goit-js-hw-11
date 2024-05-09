export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43795317-adbf90c7cfb1d2599d76b717d';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
