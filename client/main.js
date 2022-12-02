

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const pokeBtn = document.querySelector("#randomTeamGen")
const myDiv = document.querySelector("#my-div")
const form = document.querySelector('form')
const pokeName = document.querySelector('#name-input')
const pokeType = document.querySelector('#pokeType-input')
const baseURL = "http://localhost:4000/api/poke"
function pokeCallBack(pokemon) {
    myDiv.textContent = ''
    let pokemonArr  = pokemon.data.results
   for(i = 0; i < 6; i++){
    let randomIndex = Math.floor(Math.random() * pokemonArr.length);
        let randomPokemon = pokemonArr[randomIndex];
        dispPoke(randomPokemon.name)
    }
   
}

const createNewPoke = () => 
    axios.post(baseURL , {name: pokeName.value, pokeType: pokeType.value}).then(pokeDestruct)
    
const pokeDestruct = ({data: poke}) => dispPoke2(poke)



const getCompliment = () => {
    
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () =>{
    console.log('hi')
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            console.log(res.data)
            const data = res.data
            alert(data)
      })
}

const getTeam = () => {
   axios.get('https://pokeapi.co/api/v2/pokemon/').then(pokeCallBack)
    
}
const deletePoke = () => {
    axios.delete(`${baseURL}/${id}`).then(dispPoke2)
}

function dispPoke(poke){
    
    const pokeName = document.createElement('h2')
        pokeName.textContent = poke
        myDiv.appendChild(pokeName)
        console.log(poke)
}
function dispPoke2(poke){
    for(i = 0; i < poke.length; i++){
        const pokeName = document.createElement('h2')
        pokeName.textContent = poke[i].name + ': ' + poke[i].pokeType + ' type'
        // pokeName.innerHTML = `<p ${poke[i].name}: ${poke[i].pokeType}</p><button onclick="deletePoke(${poke[i].id})">delete</button>`
        //This is for delete function, didnt have enough time to make it work with everything else.
        myDiv.appendChild(pokeName)
    }
}

function formSubmit(e){
e.preventDefault()


createNewPoke()
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
pokeBtn.addEventListener('click', getTeam)
form.addEventListener('submit', formSubmit)