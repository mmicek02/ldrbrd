'use strict';

const token = '_PC6w6FnFavomuS39dpQ8r-_QcaeNnGE-XJWWsyjLnfdybqcXZA';

const searchURL = "https://api.pandascore.co/ow/matches/upcoming";

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
    return queryItems.join('&');
  }

  function displayResults(responseJson, maxResults) {
    // if there are previous results, remove them
    console.log(responseJson);
    $('.details').empty();
    // iterate through the articles array, stopping at the max number of results
    for (let i = 0; i < responseJson.default.length; i++){
      // for each video object in the articles
      //array, add a list item to the results 
      //list with the article title, source, author,
      //description, and image
      $('.details').append(
        `<span class="result">  
            <span class="imagePlaceholder">
                <img src='${responseJson.default[i].league.image_url}'>
            </span>
            <p>
                v.s.
            </p>
            <span class="imagePlaceholder">
                <img src='${responseJson.default[i].opponents.opponent.image_url}'>  
            </span>
            <p class="resultText">
                Result text goes here. And Should be on another line so it is easier to read.
            </p>
        </span>`
      )};
  };
  
  function getOWResults() {
  
   const params = {
        token: token,
    }

    const queryString = formatQueryParams(params)
    const url = searchURL + '?' + queryString;

    console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

$(getOWResults);