// geting ids
const searchMovie = document.getElementById('search-movie');
let movieDisplay = document.getElementById('movieDispay')

// IMDB API URL for access list of movies 
// https://www.omdbapi.com/?apikey=e387e4&s=thor&page=1 

//onclick function show all list of movies 
function callIMDB() {

  //geting input box value and store in veriable
  //trim() is use for removing space at staring and end of string
  var movieName = document.getElementById("movieName").value.trim();

  //check user input string greater then zero or not 
  if (movieName.length) 
  {
    //adding movie name to url
    var url = `https://www.omdbapi.com/?apikey=e387e4&s=${movieName}&page=1`
    
    //making API call from here 
    var xhrReq = new XMLHttpRequest();
    xhrReq.open('get', url, true);
    xhrReq.send();
    xhrReq.onload = function () 
    {
      var responseJson = JSON.parse(xhrReq.response);
      //if movie is found then only call displayMovie function
      if(responseJson.Response != "False")
      {
        displayMovie(responseJson);
      }
      else
      {
        alert("Not Found :( ");
        return;
      }
    }
  }
  else{
    alert("Enter Movie Name..");
  }

}

//display Movie 
function displayMovie(movieList) {

  //first empty the container
  movieDisplay.innerHTML = " ";

  //iterate every element 
  for (let i of movieList.Search) 
  {
    //creteing new div 
    let movieListItem = document.createElement('div');

    //for this div add id of movie id provieded by imdb 
    movieListItem.dataset.id = i.imdbID;
    
    //adding internal tags to newly creted div
    movieListItem.innerHTML = ` 
    <div class="card mt-2 shadow" style="width: 18rem;">
        <img class="card-img-top" src="${i.Poster}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${i.Title}</h5>
        <p class="card-text">year:${i.Year}</p>
        <p class="card-text">Type:${i.Type}</p>
        <a href="viewFullInfo.html?imdbId=${i.imdbID}" id="${i.imdbID}" class="btn btn-primary" >view</a>
        <a href="#" id="${i.imdbID}" class="btn btn-primary">Add Favorite</a>
      </div>
    </div>`;

    //append new div to movieDispay container
    movieDisplay.appendChild(movieListItem);

   
  }
}


