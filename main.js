// const harflar = ["z" ,"l" , "m" , "o" , "r" , ];
// ["l" ,"z" , "m" , "o " , "r" ,]
// ["l" , "m" , "z" , "o" , "r" ,]
// ["l " , "m" , "o" , "z" , "z" , "r"]

// const numbers = [100 , 73 , 883 , 1 , 9 , 21 , 77 ,];
// const tartib = numbers.sort(function (a, b) {
//     return a - b;
// })
// console.log(tartib);
const pokemonForm = document.querySelector("#form");
const pokeInput = document.querySelector("#input");
const pokeSort = document.querySelector("#select");  
const pokeBox = document.querySelector("#pokewrapper");

console.log(pokemonForm, pokeSort, pokeInput, pokeBox);


function renderPokemon(poke) {
    pokeBox.innerHTML = ""; 
    poke.forEach(pokemon => {
        pokeBox.innerHTML += `
            <li class="function--list">
                <span class="span">${pokemon.num}</span>
                <h2 class="function--link">${pokemon.name}</h2>
                <img src="${pokemon.img}" alt="${pokemon.name}">
                <span>${pokemon.type.join(" || ")}</span>
            </li>
        `;
    });
}

// Dastlab barcha Pokémonlarni chiqarish
renderPokemon(pokemons);

// Qidirish funksiyasi
pokemonForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const searchText = pokeInput.value.toLowerCase();
    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchText)
    );
    renderPokemon(filteredPokemons);
});

// Sort funksiyasi
pokeSort.addEventListener("change", function () {
    const sortType = this.value;
    if (sortType === "A-Z") {
        pokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "Z-A") {
        pokemons.sort((a, b) => b.name.localeCompare(a.name));
    }
    renderPokemon(pokemons);
});