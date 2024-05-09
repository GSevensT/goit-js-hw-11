import axios from 'axios';
import Notiflix from 'notiflix';

const searchInput = document.getElementById('search-input');
const form = document.getElementById('search-form');
const container = document.getElementById('container');

const API_KEY = '43780012-c12ed939dd286fac31963c18f';

function renderElements(data) {
  //const divElement = document.createElement('div');
}

//HANDLE FORM SUBMIT
async function handleFormSubmit(e) {
  e.preventDefault();
  const searchQuery = searchInput.value;
  //searchQuery = searchQuery.replace(' ', '+');

  const res = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  );

  const formattedResponse = res.data.hits.map(hit => {
    return {
      webformatURL: hit.webformatURL,
      largeImageURL: hit.largeImageURL,
      tags: hit.tags,
      likes: hit.likes,
      views: hit.views,
      comments: hit.comments,
      downloads: hit.downloads,
    };
  });

  //FORMATTED RESPONSE

  formattedResponse.forEach(data => {
    const div = document.createElement('div');

    div.innerHTML = `
    <img width="250px" src=${data.largeImageURL}/>
    <div>Likes: ${data.likes}</div>
    <div>Views: ${data.views}</div>
    <div>Comments: ${data.comments}</div>
    <div>Downloads: ${data.downloads}</div>
    `;

    //console.log(div);

    container.appendChild(div);
  });

  Notiflix.Notify.success('We Found It');

  //renderElements(data);
}

form.addEventListener('submit', handleFormSubmit);

//loadData();
