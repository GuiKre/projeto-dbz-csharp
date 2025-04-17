const nome = document.getElementById('nome');

const fetchAPI = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        nome.innerText = `${data.name}`
    });

// console.log(fetchAPI)
