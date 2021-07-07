import './sass/main.scss';
import NewsCountries from './js/countries-servise.js';
import debounce from 'lodash.debounce';
import countriesListTpl from './templates/countries.hbs';
import countryCardTpl from './templates/country.hbs';
import { showAlert, showNotice, showInfo, showSuccess, showError } from './js/pnotify.js';

const refs = {
  input: document.querySelector('.js-input'),
  container: document.querySelector('.js-container'),
};

const newCountries = new NewsCountries();

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  clearCardContainer();
  newCountries.query = e.target.value;
  if (!newCountries.query) {
    showInfo();
    return;
  }

  fetchCountries();
}

function fetchCountries() {
  newCountries.fetchCountries().then(data => {
    console.log(data);
    if (data.length > 10) {
      showAlert();
      return;
    } else if (data.length > 1 && data.length <= 10) {
      creatCountries(data);
      showNotice();
    } else if (data.length === 1) {
      creatCountry(data);
      showSuccess();
    } else {
      clearCardContainer();
      showError();
    }
  });
}

function creatCountries(countries) {
  refs.container.innerHTML = countriesListTpl(countries);
}

function creatCountry(country) {
  refs.container.innerHTML = countryCardTpl(country);
}

const clearCardContainer = () => {
  refs.container.innerHTML = '';
};
