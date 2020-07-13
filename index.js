/* eslint-disable no-undef */
'use strict';

function getRandom() {
  fetch('https://dog.ceo/api/breeds/image/random/&limit=25')
  //http://api.giphy.com/v1/gifs/search?q=batman&limit=25
    .then(response => response.json( ))
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function getDogBreed() {
  fetch('https://dog.ceo/api/breed/akita/images/random/&limit=3')
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  ),
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogBreed();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});