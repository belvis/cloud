const md5 = require('md5');
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    ctrl = require('./favorites-controller'),
    marvel = require('marvel'),
    port = 3005,
    app = express(),
    axios = require('axios');
   let keys = require('./keys');

app.use(bodyParser.json());

app.get('/api/favorites', ctrl.read)
app.delete('/api/favorites/:id', ctrl.delete)

app.listen(port, ()=>{
    console.log(`the show is on port ${port}, and it starts right now!`)
})

app.get('/api/heroes', (req, res)=>{
   
   let ts = new Date().toString();
   let hash = md5(ts + keys.privateKey + keys.publicKey);
   console.log(hash);
   axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${keys.publicKey}&hash=${hash}`).then(resp=>{
     res.send(resp.data);
   }).catch((err)=>{
       console.error(err);
   })
})