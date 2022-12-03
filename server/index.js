const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { newPoke } = require('./controller')
const { deletePoke } = require('./controller')
const { changeType } = require('./controller')
app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune)
app.post('/api/poke', newPoke)
app.delete('/api/poke/:id', deletePoke)
app.put('/api/poke/:id', changeType)




app.listen(4000, () => console.log("Server running on 4000"));
