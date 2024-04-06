const querySearchString = location.search;
const queryData = querySearchString.slice(querySearchString.lastIndexOf('=') + 1);
const pokemonSprite = getPokemonSprite();

document.title = `Página do ${queryData}`;

function getPokemonSprite() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${queryData}`)
        .then(data => {
            return data.json();
        })
        .then(pokemon => {
            createElement(pokemon.sprites.front_default);
        });
}

function createElement(src) {
    const pokemonImg = document.createElement('img');
    const pokemonTitle = document.createElement('h2');

    pokemonImg.src = src;
    pokemonImg.alt = `${queryData} Sprite`; 
    pokemonImg.id = 'img-sprite';

    pokemonTitle.textContent = `Informações sobre ${queryData}`;

    const section = document.querySelector('main section'); 
    section.appendChild(pokemonTitle);
    section.appendChild(pokemonImg);
}
