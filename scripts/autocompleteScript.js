// array of movies
let movies = ["Thor","Face","x-man","mission","you","question","Rustom","vison","operator","Iron","Iron Man","Avengers","RRR","Tanhaji","Taylor","marvel","K.G.F","Bahubali","Drishyam","Avatar","Amara","Avatar: The Way of Water","Sam","Sandy","Danny","Ellen","Camille","Chloe","Emily","Nadia","Mitchell","Harvey","Lucy","Amy","Glen","Peter","Spider","Doctor Strange","Doctor","Dangal","Sanju","PK","War","Tiger Zinda Hai","Padmaavat","Sultan","Kabir Singh","Tanhaji: The Unsung Warrior","Dhoom","The Kashmir Files","Brahmastra","URI","Bharat","Chennai Express","Avtar","Black","Jocker"];
  
  //Sort movies in ascending order
  let sortedMovies = movies.sort();
  
  //geting id 
  let input = document.getElementById("movieName");
  
  //add on key up on input
  input.addEventListener("keyup", (e) => {
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedMovies) {
      //convert input to lowercase and compare with each string
  
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //add common class 
        listItem.classList.add("list-items");
        //add cursor pointer
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayMovies('" + i + "')");
        //Display matched part in bold
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
      }
    }
  });
  function displayMovies(value) {
    input.value = value;
    removeElements();
  }
  function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }