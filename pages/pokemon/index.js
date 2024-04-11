function changePageTitle(title) {
  document.title = title;
}

function generateInfoSection(sprites, pokemonName) {
  const h2 = document.createElement('h2');
  h2.id = "info-pokemon-label";
  h2.textContent = `Informações sobre ${pokemonName}`;

  const img = document.querySelector('img');
  img.alt = `Imagem do Pokémon ${pokemonName}`;

  const spriteLinks = Object.values(sprites);
  const filteredSprites = spriteLinks.filter(link => typeof link === 'string');

  let currentIndex = 0;
  img.src = filteredSprites[currentIndex];

  img.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= filteredSprites.length) {
      currentIndex = 0;
    }
    img.src = filteredSprites[currentIndex];
  });

  const section = document.querySelector('#info-pokemon');
  section.appendChild(h2);
  section.appendChild(img);
}

async function getPokemonData(name) {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const jsonData = await data.json();
    generateInfoSection(jsonData.sprites, name);
  } catch (error) {
    console.error(error);
  }
}

function getSearchParams() {
  if (!location.search) {
    return;
  }

  const urlSearchParams = new URLSearchParams(location.search);
  const pokemonName = urlSearchParams.get('name');

  changePageTitle(`Página do ${pokemonName}`);
  getPokemonData(pokemonName);
}

document.addEventListener('DOMContentLoaded', function () {
  getSearchParams();
});
