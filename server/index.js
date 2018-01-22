const md5 = require('md5');
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    ctrl = require('./favorites-controller'),
    api = require('marvel-api'),
    port = 3005,
    app = express(),
    axios = require('axios');
   const keys = require('./keys');
   const marvel = api.createClient({
    publicKey: keys.publicKey
  , privateKey: keys.privateKey
  });

app.use(bodyParser.json());

app.get('/api/favorites', ctrl.read)
app.delete('/api/favorites/:id', ctrl.delete)

app.listen(port, ()=>{
    console.log(`the show is on port ${port}, and it starts right now!`)
})

app.get('/api/heroes', (req, res)=>{
   
    marvel.characters.findAll()
    .then((resp)=>{
        console.log(resp.data);
        res.send(resp.data)
    })
    .fail(console.error)
})