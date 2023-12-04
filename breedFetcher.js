/* eslint-disable linebreak-style */
const request = require('request');

const cfaUrl = "http://cfa.org/Breeds/BreedsSthruT/Siberian.aspx";

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

  console.log('Fetched data:', data);
});