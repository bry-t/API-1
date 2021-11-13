let searchTerm = document.querySelector('.search'); 
let searchForm = document.querySelector('form');
let submitBtn = document.querySelector('.submit');
let section = document.querySelector('section');
let results = document.querySelector('.results')



searchForm.addEventListener('submit', getPokemonByName);

async function getPokemonByName(e){
    e.preventDefault()
    
    await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.value}`)
        .then(res => res.json())
        .then(data => displayResults(data))
        .catch(err => alert("Not a Valid Name"))
}

let moves = document.getElementById("moves")
let types = document.getElementById("types")
let abilities = document.getElementById("abilities")

function displayResults(data){
    while(moves.firstChild){
        moves.removeChild(moves.firstChild)
    }
    while(types.firstChild){
        types.removeChild(types.firstChild)
    }
    while(abilities.firstChild){
        abilities.removeChild(abilities.firstChild)
    }

    console.log(data);

    let typeCeil = 2

    if(data.types.length < 3) {
        typeCeil = data.types.length - 1
    }

    for(let i=0; i<=typeCeil; i++){
        let type = document.createElement("li")
        type.innerHTML = data.types[i].type.name
        types.appendChild(type)
    }

    let moveCeil = 3

    if(data.moves.length < 4) {
        moveCeil = data.moves.length - 1
    }

    for( let i = 0; i <= moveCeil; i++){
    //console.log(data.moves[i].move.name);
        let move = document.createElement("li")
        move.innerHTML = data.moves[i].move.name;
        moves.appendChild(move)
    }

    let abilityCeil = 3

    if(data.abilities.length < 4) {
        abilityCeil = data.abilities.length - 1
    }

    for( let i = 0; i <= abilityCeil; i++){
        let ability = document.createElement("li")
        ability.innerHTML = data.abilities[i].ability.name;
        abilities.appendChild(ability)
    }
}