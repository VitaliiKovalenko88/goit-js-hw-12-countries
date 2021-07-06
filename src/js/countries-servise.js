export default class NewsCountries {
  constructor() {
    this.searchQuery;
  }

  fetchCountries() {
    const url = `https://restcountries.eu/rest/v2/name/${this.searchQuery}`;
    fetch(url).then(respons => respons.json());
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
