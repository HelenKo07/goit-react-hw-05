const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
 headers: {
  Authorization: 'Bearer 497cfda0ce104cc831d7842618e87dbd'
 }
};

axios.get(url, options)
 .then(response => console.log(response))
 .catch(err => console.error(err));
