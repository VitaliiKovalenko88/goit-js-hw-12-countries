export default class NewsCountries {
  constructor() {
    this.searchQuery = '';
  }

  fetchCountries() {
    const url = `https://restcountries.eu/rest/v3.1/name/${this.searchQuery}`;
    return fetch(url)
      .then(respons => respons.json())
      .then(data => {
        return data;
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
