var request = require('request');

request('https://private-7cf60-4youseesocialtest.apiary-mock.com/timeline', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});