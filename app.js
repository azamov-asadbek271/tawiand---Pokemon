const API = "https://pokeapi.co/api/v2/pokemon/";
const container = document.querySelector(".card-container-box");
const btn = document.querySelector(".btn")

function upDataUI (pokemon) {
      container.innerHTML = `
            <div class="round"></div>
            <p class="hp z-10 absolute right-10 top-3.5 w-14 bg-white rounded-xl flex items-center justify-center"> HP ${pokemon.stats[0].base_stat}</p>
            <img class="w-56 h-56 z-20 mt-12 mb-4" src="${pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.front_default}" alt="">
            <h2 class="mb-4 font-semibold">${pokemon.name}</h2>
            <p class=" px-3.5 text-white py-1 bg-orange-500 flex items-center justify-center   rounded-xl mb-4">${pokemon.types[0].type.name}</p>
            <div class="card-box flex justify-between w-full px-4">
                <p> ${pokemon.stats[1].base_stat}  <br> attack </p>
                <p> ${pokemon.stats[2].base_stat} <br>defense</p>
                <p>  ${pokemon.stats[5].base_stat} <br>speed</p>
            </div>
            
   `;
  
  
  
}

number = Math.trunc(Math.random() * 1000) + 1;

function getData (api) {
    fetch(api)
      .then((data) => data.json())
      .then((data) => upDataUI(data))
      .catch((err) => console.log(err));
}
getData(API + number)
btn.addEventListener("click",() => {

number = Math.trunc(Math.random() * 1000)+1;
const API = "https://pokeapi.co/api/v2/pokemon/" + number;

getData(API)
  
})
