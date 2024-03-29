/* eslint-disable linebreak-style */
const request = require('request');

const cfaUrl = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

const fetchBreedDescription = function(breedName, callback) {
  request(cfaUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
    
    if (response.statusCode !== 200) {
      console.error('Failed to fetch data. Status code:', response.statusCode);
      return;
    }
    
    const data = JSON.parse(body);
    callback(data[0][breedName]);
  });

};

module.exports = { fetchBreedDescription };


