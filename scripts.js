// need to put logo at top of page
const app = document.getElementById('root');
// const logo = document.createElement('img');
// logo.src="logo.png";

const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(container);
// container.appendChild(logo);

// create data variable to serve as a new httprequest

var request = new XMLHttpRequest();

// open a channel from the app to the API end point
request.open('GET', 'https://pokeapi.co/api/v2/pokemon',true);

request.onload = function() {
    var data = JSON.parse(this.response);
    // conditional on how to respond if http status is successful

    // if( request.status >= 200 && request.status <400 ) {
        data.pokemon.results.forEach( pokemon => console.log(pokemon.name) );
    // }
}
request.send();




