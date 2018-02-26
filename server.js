const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json());

// Get all pets
app.get('/pets', (req, res)=> {
  console.log(knex('pets').toString());
  knex('pets').then((pets) => {
    res.json(pets)
  })
  .catch((err) => {
    console.error(err)
  });
});

// Get one pet
app.get('/pets/:id', (req, res)=> {
  knex('pets').where("id", req.params.id).then((pet) => {
    res.json(pet[0]);
  })
  .catch((err) => {
    console.error(err)
  });
});

app.post('/pets', (req, res)=>{
  knex('pets').insert({
    name:req.body.name,
    breed:req.body.breed,
    age:req.body.age,
    owner_id: req.body.owner_id
  }, 'id').then((pet)=>{
    res.json(pet[0]);
  })
})

app.listen(port, function() {
  console.log('Listening on', port);
});
