

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const pokeBtn = document.querySelector("#randomTeamGen")
const myDiv = document.querySelector("#my-div")
const myDiv2 = document.querySelector("#my-div2")
const form = document.querySelector('form')
const pokeName = document.querySelector('#name-input')
const pokeType = document.querySelector('#pokeType-input')
const baseURL = "http://localhost:4000/api/poke"



function dispPoke(poke){
    myDiv.innerHTML = ''
    // console.log(typeof poke.data)
    poke.forEach(poke =>{
        const pokeName = document.createElement('h2')
        pokeName.innerHTML = `
        <p> ${poke.name} - Type: ${poke.pokeType}</p>
        <button onclick="deletePoke(${poke.id})">delete</button>
        <select 
        name="type"
        id="change-type-drop-down-${poke.id}"
        onchange="changePoke(${poke.id})"
        placeholder="change pokemon type">
        <option value="Choose new type">Choose new type</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Electric">Electric</option>
        <option value="Grass">Grass</option>
        <option value="Ground">Ground</option>
        <option value="Rock">Rock</option>
        <option value="Dark">Dark</option>
        <option value="Fighting">Fighting</option>
        <option value="Poison">Poison</option>
        <option value="Bug">Bug</option>
        <option value="Steel">Steel</option>
        <option value="Dragon">Dragon</option>
        <option value="Fairy">Fairy</option>
        <option value="Ice">Ice</option>
        <option value="Ghost">Ghost</option>
        <option value="Normal">Normal</option> 
        </select>`
        myDiv.appendChild(pokeName)
    })
    
    
}

function dispTeam(poke){
      
    const pokeName = document.createElement('h2')
        pokeName.textContent = poke
        myDiv2.appendChild(pokeName)
        
}

function pokeCallBack(pokemon) {
    
    let pokemonArr  = pokemon.data.results
   for(i = 0; i < 6; i++){
    let randomIndex = Math.floor(Math.random() * pokemonArr.length);
        let randomPokemon = pokemonArr[randomIndex];
        dispTeam(randomPokemon.name)
        console.log(randomPokemon)
    }
   
}

const pokeDestruct = ({data: poke}) => dispPoke(poke)



const createNewPoke = () => 
axios.post(baseURL , {name: pokeName.value, pokeType: pokeType.value}).then(pokeDestruct)
    
const changePoke = (id) => {
    const changeSelector = document.getElementById(`change-type-drop-down-${id}`)
    console.log(changeSelector.value)
    axios.put(`${baseURL}/${id}`,{pokeType: changeSelector.value}).then(pokeDestruct)
}


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
    myDiv2.textContent = '' 
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(pokeCallBack)
    
}

const deletePoke = (id) => {
    
    axios.delete(`${baseURL}/${id}`).then(pokeDestruct)
    
}



function formSubmit(e){
e.preventDefault()


createNewPoke()
}




complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
pokeBtn.addEventListener('click', getTeam)
form.addEventListener('submit', formSubmit)