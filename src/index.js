import './sass/main.scss';
import NewsCountries from './js/countries-servise.js';
import debounce from 'lodash.debounce';

const refs = {
  input: document.querySelector('.js-input'),
  container: document.querySelector('.js-container'),
};

const newCountries = new NewsCountries();

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  // clearCardContainer();
  newCountries.query = e.target.value;
  newCountries.fetchCountries(newCountries.query);
}

const clearCardContainer = () => {
  refs.container.innerHTML = '';
};
