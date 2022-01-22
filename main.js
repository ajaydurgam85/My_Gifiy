/* 1. Grab the input */


document.querySelector(".js-go").addEventListener('click',function(){
    var container = document.querySelector(".js-container");
    container.innerHTML="";
    var input = document.querySelector("input").value;
   console.log("search clicked");


   var search = input.split(" ").join("+");
    handleSearch(search);
  
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    var container = document.querySelector(".js-container");
    container.innerHTML="";
   
   
    var input = document.querySelector("input").value;
  
     // if the key ENTER is pressed...
     if(e.which === 13) {
        var search = input.split(" ").join("+");
    handleSearch(search);
     }
     
});

/* 2. do the data stuff with the API */

function handleSearch(search){
var url = "https://api.giphy.com/v1/gifs/search?q="+search+"&api_key=bUX9mnKpPvUipaW4R3c8ZXZabmoroWNB&limit=10";

//AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){
      
    var data = e.target.response;
    
    pushToDOM(data);
});
}



/* 3. Show me the GIFs */

function pushToDOM(input) {

    var response = JSON.parse(input);

    console.log(response);

    var imageUrl = response.data;
  

    imageUrl.forEach(function(image){
        var src = image.images.fixed_width_small.url;

        var container = document.querySelector(".js-container");
    container.innerHTML +=  "<img src=\"" + src + "\"class= \"container-image\" />";

    });

    
     
}
