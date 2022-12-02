const database = []
let newId = 1
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ['A beautiful, smart, and loving person will be coming into your life', 'At the touch of love, everyone becomes a poet.', 'An inch of time is an inch of gold.', 'Believe in yourself and others will too.','Chance favors those in motion.']
       
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    newPoke: (req, res) => {
        console.log(req.body)
        let { name, pokeType } = req.body
        let newMon = {
            id: newId,
            name,
            pokeType
        }
        console.log(newMon)
        database.push(newMon)
        res.status(200).send(database)

        newId++
    },
    deletePoke: (req, res) => {
        let { id } = req.params
        let index = database.findIndex(pokemon => pokemon.id === +id)
        database.splice(index,1)
        res.status(200).send(database)
    }
   
}

    