// function getData() {
//     let pokeNameCall = fetch("https://pokeapi.co/api/v2/pokemon");
//     let pokeAbilityCall= fetch("https://pokeapi.co/api/v2/ability");
//     const pokeNameJSON = pokeNameCall.then( response => response.json() ).then(json => console.log(json));
//     const pokeAbilityJSON = pokeAbilityCall.then( response => response.json()).then( obj => console.log(obj) );
// }
// getData();

// let awaitData = async function() {
//     const response =  await ("https://pokeapi.co/api/v2/pokemon");
//     const json = response.json();
//     console.log(json);
// }

// awaitData();
let app = document.getElementById('root');
let logo = document.createElement('img');
logo.src = ("zapdos.png");
let logoText =document.createElement('h1');
logoText.textContent = "Poke-Facts";

app.appendChild(logo);
app.appendChild(logoText);

let container = document.createElement("div");
container.setAttribute('class','container');
app.appendChild(container);


// let pokeNameObj;
// let pokeNameData = async () => {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//     pokeNameObj = response.json();
//     console.log(pokeNameObj);
// };
// pokeNameData();

// let pokeAbilityObj;
// let pokeAbilityData = async () => {
//     const response = await fetch( "https://pokeapi.co/api/v2/ability" );
//     pokeAbilityObj = response.json();
//     console.log(pokeAbilityObj);
// }
// pokeAbilityData();

// Promise.all example to get both api responses
function getData() {
Promise.all([fetch("https://pokeapi.co/api/v2/pokemon"), fetch("https://pokeapi.co/api/v2/ability")])
    .then(values => Promise.all(values.map(value => value.json())))
    .then( finalVals => {
        let pokeNameResponse = finalVals[0];
        let pokeAbilityResponse = finalVals[1];
        createCards(pokeNameResponse, pokeAbilityResponse);
        // console.log(pokeNameResponse);
    } );
}
getData();

let createCards = function (name, ability) {
    name.results.forEach( (pokemon, index) => {
        let card = document.createElement("div");
        card.setAttribute('class','card');
        let text = document.createElement("h3");
        text.textContent = `${ pokemon.name } has ${ ability.results[index].name } powerz`;
        container.appendChild(card);
        card.appendChild(text);
        
    } )
}




