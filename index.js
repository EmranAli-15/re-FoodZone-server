const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const chef = require('./data/chef.json')
const chefRecipe = require('./data/chefRecipe.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chef', (req, res) => {
  res.send(chef);
})

app.get('/chefRecipe/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipe = chefRecipe.find(n => n.id === id);
    res.send(selectedRecipe);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})