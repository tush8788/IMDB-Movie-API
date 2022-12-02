// show full Information of movie

//display container
let displayContainer = document.getElementById('displayContainer');

// calling idbi 
function showFullINFO() {
  //geting IMDB id from url pass by index.html (main file) 
  const imdbId = new URLSearchParams(window.location.search).get('imdbId');
  // editing url
  url = `https://www.omdbapi.com/?apikey=e387e4&i=${imdbId}`
  
  // calling imdb api
  var xhrReq = new XMLHttpRequest();
  xhrReq.open('get', url, true);
  xhrReq.send();
  xhrReq.onload = function () 
  {
    var responseJson = JSON.parse(xhrReq.response);
    //checking movie found or not
    if (responseJson.Response == "True") {
      displayMovie(responseJson);
    }
    else {
      alert("Movie Not Found..!");
    }

  }
}


//display Movie 
function displayMovie(movieData) 
{
  //empty container 
  displayContainer.innerHTML = " ";

  // making new dev
  let movieItem = document.createElement('div');

  //giving id to the div
  movieItem.dataset.id = movieData.imdbID;
  
  // check Rating is available or not
  let Rating;
  if (movieItem.Ratings == undefined) {
    Rating = "N/A";
  }
  else {
    Rating = movieData.Ratings[0].Value;
  }
  //adding internal html to my newly created div
  movieItem.innerHTML = `
        <div class="row">
            <div class="col img-container">
                <img src="${movieData.Poster}">
            </div>
            <div class="col">
                <h4>${movieData.Title}</h4>
                <p>Year: ${movieData.Year}</p>
                <p>Awards: ${movieData.Awards}</p>
                <p>Actors: ${movieData.Actors}</p>
                <p>BoxOffice Collection: ${movieData.BoxOffice}</p>
                <p>Rating: ${Rating}</p>
                <p>Writer: ${movieData.Writer}</p>
                <p>Director: ${movieData.Director}</p>
                <p>Plot: ${movieData.Plot}</p>
                <a href="index.html" id="${movieData.imdbID}" class="btn btn-primary" >Add Favorite</a>
            </div>
         </div> `;

  //adding new div to my display container
  displayContainer.appendChild(movieItem);
}