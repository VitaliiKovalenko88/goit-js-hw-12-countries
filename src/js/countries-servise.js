function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(respons => console.log(respons.json()))
    .catch(error => alert(error));
}

export default fetchCountries;
