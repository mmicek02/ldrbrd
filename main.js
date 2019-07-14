'use strict';

const token = '_PC6w6FnFavomuS39dpQ8r-_QcaeNnGE-XJWWsyjLnfdybqcXZA';

const searchURL = "https://api.pandascore.co/ow/matches";

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
    return queryItems.join('&');
  }

  function getNews() {
  
   const params = {
        token: token,
    }

    const queryString = formatQueryParams(params)
    const url = searchURL + '?' + queryString;

    console.log(url);
/*   
    const options = {
      headers: new Headers(
            {
                'Authorization': "Bearer " + token
            })
    };

*/
    fetch(url)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

$(getNews);