let defaultOffset = 0;
let defaultLimit = 1302;

const showLoading = () => {
  const loading = document.getElementById("loading");
  if (loading) {
    loading.style.display = "block";
  }
}

const hideLoading = () => {
  const loading = document.getElementById("loading");
  if (loading) {
    loading.style.display = "none";
    document.getElementById("card-container").style.display = "flex"
  }
}

function loadPokemon(limit, offset) {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", pokemonUrl);

  xhr.onload = function() {
    const basicData = JSON.parse(xhr.responseText);
    const results = basicData.results;

    let loaded = 0;

    const detailsArray = new Array(results.length)

    results.forEach((element, index) => {
      const detailsXhr = new XMLHttpRequest();

      detailsXhr.open("GET", element.url);

      detailsXhr.onload = function() {  
        const details = JSON.parse(detailsXhr.responseText)

        detailsArray[index] = {
          name: details.name,
          img: details.sprites.front_default
        }

        loaded++;

        if(loaded == results.length){
          detailsArray.forEach((pokemon) => {
            const cardContainer = document.getElementById("card-container");
            const div = document.createElement("div");
            div.className = "bg-white flex flex-col gap-2 justify-center items-center p-4 rounded-2xl w-32";
            div.innerHTML = `
              <img src="${pokemon.img}" alt="${pokemon.name}">
              <p class="text-xl font-bold text-[#212121]">${pokemon.name}</p>
            `;
            cardContainer.appendChild(div);
          });

          hideLoading();
        }
      }
  
      detailsXhr.send();
    });
    
  }

  xhr.send()

}


window.onload = () => {
  showLoading(); 
  loadPokemon(defaultLimit, defaultOffset);
}